import React from 'react'

import confetti from 'canvas-confetti'

const ConfettiComponent = () => {
  setTimeout(() => {
    confetti()
  }, 500)

  console.log(
    '%c📣 Yay! neotw-confetti is working! 🎉',
    'background: linear-gradient(45deg, #fc466b, #3f5efb); color: black;border-radius: 3px;padding: 3px;'
  )
  return <> </>
}

export default ConfettiComponent
