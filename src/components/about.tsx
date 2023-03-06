import type { Country } from '@shopify/address'
import { formatAddress } from '../helpers/utils'
import type { ResumeBasicsProps } from '../types/resume-basics'
import { InfoTag, InfoTextTag } from './partials/info-tag'
import { SocialTag } from './partials/social-tag'
import { Title } from './partials/title'

type AboutProps = ResumeBasicsProps & {
    countryFormatters: Country[]
}

export function About({ resumeBasics, countryFormatters }: AboutProps) {
    let locationTag = null
    if (resumeBasics?.location !== undefined) {
        const location = resumeBasics.location
        const formattedAddress = formatAddress(
            location.address || '',
            location.city || '',
            location.region || '',
            location.postalCode || '',
            location.countryCode || '',
            countryFormatters
        ).filter((a) => a.length > 0)

        locationTag = (
            <InfoTag icon="fa-map-marker">
                {/* add line break to each address line */}
                {formattedAddress.map((addr, i) => (
                    <p key={i}>{addr}</p>
                ))}
            </InfoTag>
        )
    }

    let emailTag = null
    if (resumeBasics?.email !== undefined) {
        emailTag = (
            <InfoTextTag icon="fa-envelope-o">{resumeBasics.email}</InfoTextTag>
        )
    }

    let phoneTag = null
    if (resumeBasics?.phone !== undefined) {
        phoneTag = (
            <InfoTextTag icon="fa-mobile">{resumeBasics.phone}</InfoTextTag>
        )
    }

    let websiteTag = null
    if (resumeBasics?.url !== undefined) {
        websiteTag = (
            <InfoTextTag icon="fa-desktop" url={resumeBasics.url}>
                {resumeBasics.url}
            </InfoTextTag>
        )
    }

    let socialProfileItems = null
    if (resumeBasics?.profiles !== undefined) {
        socialProfileItems = resumeBasics.profiles.map((social, i) => (
            <SocialTag
                key={i}
                username={social.username}
                network={social.network}
            />
        ))
    }

    return (
        <section class="container about-container">
            <Title value="About" />

            {locationTag}
            {emailTag}
            {phoneTag}
            {websiteTag}
            {socialProfileItems}
        </section>
    )
}
