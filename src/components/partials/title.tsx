type TitleProps = {
  value: string
}

export function Title({ value }: TitleProps) {
  return (
    <>
      <div class="title">
        <h3>{value}</h3>
        <div class="keyline"></div>
      </div>
    </>
  )
}
