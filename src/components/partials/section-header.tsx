import { formatDate } from "../../helpers/utils"

type SectionHeaderProp = {
  name?: string
  website?: string
  // TODO: release date is mutually exclusive - reflect in type
  startDate?: string
  endDate?: string
  releaseDate?: string
}

export function SectionHeader({name, website, startDate, endDate, releaseDate}: SectionHeaderProp) {
  let nameTag = null
  if (name !== undefined) {
    let nameInner = <>{name}</>
    if (website !== undefined) {
      nameInner = (
        <a href={website} target="_blank">
          {name} <i class="fa fa-external-link" aria-hidden="true"></i>
        </a>
      )
    }

    nameTag = <h3 class="bold pull-left">{nameInner}</h3>
  }

  let dateInner = null
  if (releaseDate !== undefined) {
    dateInner = <>{formatDate(releaseDate)}</>
  } else if (startDate !== undefined) {
    let startDateInner = <span class="startDate">{formatDate(startDate)}</span>
    let endDateInner = <span class="endDate"> - Present</span>
    if (endDate !== undefined) {
      endDateInner = <span class="endDate"> - {formatDate(endDate)}</span>
    }
  
    dateInner = <>{startDateInner}{endDateInner}</>
  }

  // TODO: case where name and date === null

  return (
    <>
      <div class="section-header clearfix">
        {nameTag}
        <h5 class="italic pull-right">
          {dateInner}
        </h5>
      </div>
    </>
  )
}
