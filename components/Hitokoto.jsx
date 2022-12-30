import React, { useEffect } from 'react'

import styles from './styles.module.css'

const Hitokoto = () => {
  useEffect(() => {
    const script = document.createElement('script')
    const anchor = document.getElementById('hitokoto')
    script.setAttribute(
      'src',
      'https://v1.hitokoto.cn/?encode=js&select=%23hitokoto'
    )
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('defer', true)
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  })
  return <div id='hitokoto'>Loading ...</div>
}

export default Hitokoto
