import { siteConfig } from './lib/site-config'

export default siteConfig({
  // playlist: '' // WIP
  // Custom logo - this will replace the breadcrumbs - Feature requires navigationStyle: 'custom'
  // customHeaderLogo:
  //   'https://alexchaveriat.com/_next/image?url=https%3A%2F%2Falexchaveriat.com%2Flogo.png&w=128&q=75',
  // customHeaderLogoDark:
  //   'https://oeyoewl.top/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F1825f2f9-9aa1-4b9d-aca3-c3c9c70990bb%252Favatar-around.png%3Ftable%3Dblock%26id%3D2e6d4459-ab59-4235-9139-4e8a6a72ce35%26cache%3Dv2&w=2048&q=75', // optional
  // WIP
  showPageAsideSocials: false, // https://github.com/frankcbliu/awesome-nextjs-notion-blog/blob/main/components/NotionPage.tsx
  // right top button (optional)
  showGithubRibbon: true,
  // shared button (optional)
  repoLink: null,

  // the site's root Notion page (required)
  rootNotionPageId: '2e6d4459ab59423591394e8a6a72ce35',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Personal Notion Pages',
  domain: 'oeyoewl.top', // ?? dont use custom domain, use vercel
  author: 'oeyoews',

  // open graph metadata (optional)
  description: 'Personal Notion Pages',

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
