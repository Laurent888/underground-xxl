import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

type RoundButtonProps = {
  type: 'left' | 'right'
  onClick: () => void
}

function RoundButton({ type, onClick }: RoundButtonProps) {
  return (
    <button onClick={onClick} className="roundButton flex items-center justify-center">
      {type === 'left' ? (
        <AiOutlineArrowLeft size="1.5rem" color="white" />
      ) : (
        <AiOutlineArrowRight size="1.5rem" color="white" />
      )}
    </button>
  )
}

export default RoundButton
