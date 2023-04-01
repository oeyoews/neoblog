import React from 'react'

// id config option
// convert component
const Music = () => {
  return (
    <div>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css'
      />

      <meting-js
        id='2916766519' // wip to option
        server='netease'
        order='random'
        type='playlist'
        fixed='true'
        preload='auto'
        loop='all'
        mutex='true'
        lrc-type='0'
        list-olded='true'
      />
    </div>
  )
}

export default Music
