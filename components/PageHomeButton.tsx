import * as React from 'react'

import { AiOutlineHome } from 'react-icons/ai'

import styles from './styles.module.css'

export const HomeButton: React.FC = () => {
  return (
    <div className={styles.pageActions}>
      <a className={styles.likeTweet} href={`/`} title='Home'>
        <AiOutlineHome />
      </a>
    </div>
  )
}
