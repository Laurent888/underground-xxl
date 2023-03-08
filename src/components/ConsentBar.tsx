import React from 'react'
import { isMobile } from 'react-device-detect'

type ConsentBarProps = {
  visible: boolean
  onAccept: () => void
  onReject: () => void
}

const ConsentBar = ({ visible, onAccept, onReject }: ConsentBarProps): JSX.Element | null => {
  if (!visible) {
    return null
  }

  if (isMobile) {
    return <></>
  }

  return (
    <div className="z-50 w-screen fixed bottom-0 md:h-20 bg-neutral-900">
      <div className="flex h-full flex-col md:flex-row justify-between px-12 items-center ">
        <p className="text-sm pt-4 md:pt-0">
          We use cookies to collect information about how many pages you visit and from which country. Click “OK” to
          give us your consent to use cookies for these purposes.
        </p>

        <div className="flex flex-row py-4 md:py-0">
          <button className="py-1 px-6 mr-4 border-white border-2 text-white" onClick={onReject}>
            Decline
          </button>
          <button className="py-1 px-6 border-white border-2 bg-neutral-100 text-black" onClick={onAccept}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsentBar
