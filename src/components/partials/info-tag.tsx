import { ComponentChildren } from "preact"
import { removeProtocol } from "../../helpers/utils"

type InfoTagTextProps = {
  icon?: string
  url?: string
  children?: string
}

type InfoTagProps = {
  icon?: string
  children?: ComponentChildren
}

export function InfoTag({icon, children}: InfoTagProps) {
  let iconTag = null
  if (icon !== undefined) {
    iconTag = <i class={`fa ${icon}`}></i>
  }

  return (
    <div class="info-tag-container">
      {iconTag}
      <h6 class="info-text">{children}</h6>
    </div>
  )
}

export function InfoTextTag({ icon, url, children }: InfoTagTextProps) {
  let infoTextInner = null
  if (children !== undefined) {
    if (url === undefined) {
      infoTextInner = <>{children}</>
    } else {
      infoTextInner = (
        <a href={url} target="_blank">
          {removeProtocol(children)} <i class="fa fa-external-link" aria-hidden="true"></i>
        </a>
      )
    }
  }

  return <InfoTag icon={icon}>{infoTextInner}</InfoTag>
}
