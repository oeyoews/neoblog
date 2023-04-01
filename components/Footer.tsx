import * as React from 'react'

import {
  FaEnvelopeOpenText,
  FaLinkedin,
  FaMastodon,
  FaYoutube,
  FaZhihu
} from 'react-icons/fa'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5'
import { SiNotion } from 'react-icons/si'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

{
  /*
const CurrentYear = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      {currentYear}-{currentYear + 1}
    </>
  )
}
*/
}

{
  /* const Hitokoto = dynamic(
  () => {
    return import('./Hitokoto')
  },
  { ssr: false }
) */
}

// TODO: merge the data and icons from PageSocial with the social links in Footer

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
          Copyright {config.author}
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
        <div className={styles.social}>
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

          {config.mastodon && (
            <a
              className={styles.mastodon}
              href={config.mastodon}
              title={`Mastodon ${config.getMastodonHandle()}`}
              rel='me'
            >
              <FaMastodon />
            </a>
          )}

          {config.zhihu && (
            <a
              className={styles.zhihu}
              href={`https://zhihu.com/people/${config.zhihu}`}
              title={`Zhihu @${config.zhihu}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaZhihu />
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

          {config.linkedin && (
            <a
              className={styles.linkedin}
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              title={`LinkedIn ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          )}

          {config.newsletter && (
            <a
              className={styles.newsletter}
              href={`${config.newsletter}`}
              title={`Newsletter ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaEnvelopeOpenText />
            </a>
          )}

          {config.youtube && (
            <a
              className={styles.youtube}
              href={`https://www.youtube.com/${config.youtube}`}
              title={`YouTube ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube />
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
        </div>
        {/*  <Hitokoto /> */}
      </footer>
    </>
  )
}

export const Footer = React.memo(FooterImpl)
