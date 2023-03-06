import { DateTime } from 'luxon'
import {
    formatAddress as formatAddressByCountry,
    loadCountries,
} from '@shopify/address'
import type { Country, Address } from '@shopify/address'

/**
 *
 * @param url
 * @returns
 */
export function removeProtocol(url: string): string {
    // TODO: url parse and proto remove
    return url.replace(/.*?:\/\//g, '')
}

/**
 *
 * @param dateString
 * @returns
 */
export function formatDate(dateString: string): string {
    // migrated from moment(string).format('MM/YYYY')
    const isoParsed = DateTime.fromISO(dateString)
    const rfcParsed = DateTime.fromRFC2822(dateString)
    if (isoParsed.isValid) {
        return isoParsed.toFormat('MM/yyyy')
    } else if (rfcParsed.isValid) {
        return rfcParsed.toFormat('MM/yyyy')
    } else {
        throw new Error(
            `Could not parse date due to errors: (iso: ${isoParsed.invalidReason}) (rfc2822: ${rfcParsed.invalidReason})`
        )
    }
}

/**
 *
 * @param address
 * @param city
 * @param region
 * @param postalCode
 * @param countryCode
 * @param localeCountries
 * @returns
 */
export function formatAddress(
    address: string,
    city: string,
    region: string,
    postalCode: string,
    countryCode: string,
    localeCountries: Country[]
): string[] {
    // assumes country for address formatting is the same as country of the address
    const country = localeCountries.find((c) => c.code === countryCode)
    if (country === undefined) {
        throw new Error(`Could not find country with code: ${countryCode}`)
    }

    const [addressLine1, ...addressLines2] = address.split('\n', 2)
    const addressObj: Address = {
        address1: addressLine1,
        address2: addressLines2.join(' '),
        city: city,
        zip: postalCode,
        country: countryCode,
    }
    return formatAddressByCountry(addressObj, country)
}

/**
 *
 * @param locale
 * @returns
 */
export async function loadCountryFormatters(
    locale: string
): Promise<Country[]> {
    // async portion of address formatting handled separately
    return loadCountries(locale)
}
