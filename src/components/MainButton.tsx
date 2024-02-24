import Link from 'next/link'
import React from 'react'

type MainButtonProps = {
  text: string
  href?: string
  newTab?: boolean
  onClick?: () => void
}

function MainButton({ text, href, newTab = false, onClick }: MainButtonProps) {
  return (
    <Link href={href ?? '/'} target={newTab ? '_blank' : undefined}>
      <button
        onClick={onClick}
        className="py-3 px-10 font-semibold text-xl tracking-wider text-white bg-gradient-to-l  from-orange-700 via-orange-600 to-amber-600 hover:opacity-80 hover:ease-linear duration-100"
      >
        {text}
      </button>
    </Link>
  )
}

export default MainButton
