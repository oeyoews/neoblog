import React, { useEffect } from 'react'

// id config option
// convert component
const Music = () => {
  useEffect(() => {
    const anchor = document.getElementById('twm')
    // aplayer
    const aplayerScript = document.createElement('script')
    aplayerScript.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js'
    )
    aplayerScript.setAttribute('defer', true)
    anchor.appendChild(aplayerScript)

    // metingjs
    const metingjsScript = document.createElement('script')
    metingjsScript.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js'
    )
    metingjsScript.setAttribute('defer', true)
    anchor.appendChild(metingjsScript)
    return () => {
      anchor.innerHTML = ''
    }
  })
  const twm = (
    <>
      <div id='twm'></div>
      <meting-js
        id='2916766519'
        server='netease'
        order='random'
        type='playlist'
        fixed='true'
        preload='auto'
        loop='all'
        mutex='true'
        lrc-type='0'
        list-olded='true'
      ></meting-js>
    </>
  )

  return twm
}

export default Music
