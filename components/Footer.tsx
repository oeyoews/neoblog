import * as React from 'react'

import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5'

// import { FiGithub, FiTwitter } from 'react-icons/fi'
// import { SiNotion } from 'react-icons/si'
import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          {/* maybe have some question https://github.com/transitive-bullshit/nextjs-notion-starter-kit/pull/432 */}
          /* Copyright {config.author} */
        </div>
        <div className={styles.settings}>
          {hasMounted && (
            <a
              className={styles.toggleDarkMode}
              href='#'
              role='button'
              onClick={onToggleDarkMode}
              title='Toggle dark mode'
            >
              {isDarkMode ? <IoMoonSharp /> : <IoSunnySharp />}
            </a>
          )}
        </div>
        {/* <div className={styles.social}>
          {config.twitter && (
            <a
              className={styles.twitter}
              href={`https://twitter.com/${config.twitter}`}
              title={`Twitter @${config.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiTwitter />
            </a>
          )}

          {config.github && (
            <a
              className={styles.github}
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiGithub />
            </a>
          )}

          {config.notion && (
            <a
              className={styles.notionPublic}
              href={`https://${config.author}.notion.site/${config.notion}-${config.rootNotionPageId}`}
              title={`Notion ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiNotion />
            </a>
          )}
        </div> */}
      </footer>
    </>
  )
}

export const Footer = React.memo(FooterImpl)
