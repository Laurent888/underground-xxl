import React from 'react'

const TicketButtonNavigation = () => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/tickets"
      className="py-4 px-12 font-semibold text-2xl text-white bg-orange-600 hover:opacity-80 hover:ease-linear duration-100"
      style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}
    >
      TICKETS
    </a>
  )
}

export default TicketButtonNavigation
