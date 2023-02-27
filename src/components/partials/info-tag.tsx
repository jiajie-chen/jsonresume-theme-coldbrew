import { removeProtocol } from "../../helpers/utils"

type InfoTagProps = {
  icon?: string
  url?: string
  text: string
}

export function InfoTag({ icon, url, text }: InfoTagProps) {
  let iconTag = null
  if (icon !== undefined) {
    iconTag = <i class={`fa ${icon}`}></i>
  }

  let infoTextInner = <>{text}</>
  if (url !== undefined) {
    infoTextInner = (
      <a href={url} target="_blank">
        {removeProtocol(text)} <i class="fa fa-external-link" aria-hidden="true"></i>
      </a>
    )
  }

  return (
    <>
      <div class="info-tag-container">
        {iconTag}
        <h6 class="info-text">{infoTextInner}</h6>
      </div>
    </>
  )
}
