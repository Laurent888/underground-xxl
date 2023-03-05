import React from 'react'

type BodyProps = {
  text: string
  hasPadding?: boolean
  mobileLeft?: boolean
  bottomSpacing?: boolean
  className?: string
}
function Body({ text, hasPadding, mobileLeft = false, bottomSpacing = true, className }: BodyProps) {
  const paddingBottom = (() => {
    let paddingBottomClass = ''
    if (bottomSpacing) {
      paddingBottomClass = 'pb-8'
    } else {
      paddingBottomClass = 'pb-4'
    }
    return paddingBottomClass
  })()

  return (
    <p
      className={`font-normal text-base md:xl ${
        hasPadding && 'px-4'
      } md:px-0 text-center md:text-start ${paddingBottom} ${mobileLeft && 'text-start'} ${className}`}
    >
      {text}
    </p>
  )
}

export default Body
