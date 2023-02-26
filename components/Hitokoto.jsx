import React, { useEffect } from 'react'

import styles from './styles.module.css'

function updateHitokoto() {
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
}

const Hitokoto = () => {
  useEffect(() => {
    updateHitokoto()
  })
  return (
    <div
      id='hitokoto'
      title='Next hitokoto'
      onClick={updateHitokoto}
      className={styles.hitokoto}
    >
      {' '}
    </div>
  )
}

export default Hitokoto
