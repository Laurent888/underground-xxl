import React from 'react'

type PriceRowProps = {
  title: string
  price: number
  showPerson?: boolean
  children: React.ReactNode
}

const PriceRow = ({ title, price, showPerson, children }: PriceRowProps) => {
  const priceDividedByTwo = price / 2

  return (
    <div className="mb-8">
      <div className="flex flex-row w-full md:w-[700px] items-start md:items-end justify-between mb-1">
        <p>{title}:</p>

        <div className="flex flex-col md:flex-row items-end">
          <p className="text-xl font-semibold text-orange-600">{price}€</p>
        </div>
      </div>

      <div className="flex flex-row w-full md:w-[700px] items-start justify-between">
        {children}
        {showPerson ? <p className="text-neutral-500 text-sm">({priceDividedByTwo}€/person)</p> : ''}
      </div>
    </div>
  )
}

export default PriceRow
