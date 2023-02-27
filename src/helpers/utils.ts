import { DateTime } from 'luxon'

export function removeProtocol(url: string) {
  // TODO: url parse and proto remove
  return url.replace(/.*?:\/\//g, '');
}

export function formatDate(dateString: string) {
  // migrated from moment(string)
  const isoParsed = DateTime.fromISO(dateString)
  const rfcParsed = DateTime.fromRFC2822(dateString)
  if (isoParsed.isValid) {
    return isoParsed.toFormat('MM/yyyy')
  } else if (rfcParsed.isValid) {
    return rfcParsed.toFormat('MM/yyyy')
  } else {
    throw new Error(
      `Could not parse date due to errors: (iso: ${isoParsed.invalidReason}) (rfc2822: ${rfcParsed.invalidReason})`
    );
  }
}
