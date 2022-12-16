import { siteConfig } from './lib/site-config'

export default siteConfig({
  // WIP
  showPageAsideSocials: true, // https://github.com/frankcbliu/awesome-nextjs-notion-blog/blob/main/components/NotionPage.tsx
  // right top button (optional)
  showGithubRibbon: true,
  // shared button (optional)
  repoLink: 'oeyoews/nextjs-notion-starter-kit',

  // the site's root Notion page (required)
  rootNotionPageId: '2e6d4459ab59423591394e8a6a72ce35',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Next.js Notion Starter Kit',
  domain: 'oeyoewl.top', // ?? dont use custom domain, use vercel
  author: 'oeyoews',

  // open graph metadata (optional)
  description: 'Next.js Notion Starter Kit Site',

  // social usernames (optional)
  notion: 'oeyoews',
  twitter: 'oeyoews',
  github: 'oeyoews',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null, // cant with dash ???
  defaultPageCover: null, // these two options have some bug?
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom', // show theme button
  navigationLinks: [
    {
      title: 'About',
      pageId: 'caa3e4336ff64640b4fd47d739269612'
    },
    {
      title: 'Contact',
      pageId: 'b28be9d4fe4c4f1daa6bd7385251e25b'
    }
  ]
})
