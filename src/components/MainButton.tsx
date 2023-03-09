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
        className="py-4 px-12 font-semibold text-2xl text-white bg-gradient-to-l from-orange-600 via-orange-500 to-yellow-500 hover:opacity-80 hover:ease-linear duration-100"
        style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}
      >
        {text}
      </button>
    </Link>
  )
}

export default MainButton
