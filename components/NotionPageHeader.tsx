import * as React from 'react'
import Image from 'next/legacy/image'

import * as types from 'notion-types'
import cs from 'classnames'
import { IoMoonSharp, IoSunnyOutline } from 'react-icons/io5'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'

import {
  customHeaderLogo,
  customHeaderLogoDark,
  isSearchEnabled,
  navigationLinks,
  navigationStyle,
  rootNotionPageId
} from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export const HeaderLogo: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()

  const { isDarkMode } = useDarkMode()

  const LinkWrapper = (props: {
    currentPage: string
    children: JSX.Element
  }) => {
    if (props.currentPage !== '/') {
      return (
        <components.PageLink
          href={mapPageUrl(rootNotionPageId)}
          key={0}
          className={cs(styles.navLink, 'breadcrumb', 'button')}
        >
          {props.children}
        </components.PageLink>
      )
    }
    return <div style={{ padding: 12, display: 'flex' }}>{props.children}</div>
  }

  return (
    <LinkWrapper currentPage={mapPageUrl(block.id)}>
      <Image
        src={
          isDarkMode && customHeaderLogoDark
            ? customHeaderLogoDark
            : customHeaderLogo
        }
        // width='100%'
        // height='100%'
        alt='logo'
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain'
          // maxWidth: "100%",
          // height: "auto"
        }}
      />
    </LinkWrapper>
  )
}

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        {customHeaderLogo ? (
          <HeaderLogo block={block} />
        ) : (
          <Breadcrumbs block={block} rootOnly={true} />
        )}
        <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
    </header>
  )
}
