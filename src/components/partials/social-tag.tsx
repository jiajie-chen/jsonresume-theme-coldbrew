import { InfoTextTag } from '/@/components/partials/info-tag'

type SocialTagProps = {
    network?: string
    username?: string
}

export function SocialTag({ network, username }: SocialTagProps) {
    if (network === undefined || username === undefined) {
        // TODO: could be handled more elegantly outside of component if null props
        return null
    }

    let tagText = username
    let iconClass = `fa-${network.toLowerCase()}`
    if (network.toLowerCase() === 'linkedin') {
        tagText = `in/${tagText}`
        iconClass = 'fa-linkedin-square'
    }

    return <InfoTextTag icon={iconClass}>{tagText}</InfoTextTag>
}
