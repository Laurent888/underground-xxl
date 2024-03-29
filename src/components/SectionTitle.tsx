import React from 'react'

type SectionTitleProps = {
  text?: string
  bottomSpacing?: boolean
  mobileLeft?: boolean
  small?: boolean
  className?: string
  children?: React.ReactNode
}
function SectionTitle({
  text,
  small,
  children,
  className = '',
  mobileLeft = false,
  bottomSpacing = true,
}: SectionTitleProps) {
  const smallText = 'text-xl md:text-2xl'
  const normalText = 'text-3xl md:text-6xl'

  return (
    <h2
      className={`font-bold md:font-extrabold ${small ? smallText : normalText} uppercase text-center md:text-start ${
        bottomSpacing && 'pb-6 md:pb-8'
      } ${mobileLeft && 'text-start'} ${className}`}
    >
      {children ?? text}
    </h2>
  )
}

export default SectionTitle
