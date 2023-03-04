type TitleProps = {
  value: string
}

export function Title({ value }: TitleProps) {
  // TODO: children slot the data
  return (
    <div class="title">
      <h3>{value}</h3>
      <div class="keyline"></div>
    </div>
  )
}
