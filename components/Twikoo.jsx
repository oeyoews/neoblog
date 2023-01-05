import React, { useEffect } from 'react'

import twikoo from 'twikoo'

const Twikoo = () => {
  useEffect(() => {
    twikoo({
      // WIP
      // envId: 'https://twikoo-oeyoews.vercel.app', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
      envId: 'http://oeyoews.fun', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
      el: '#twikoo', // 容器元素
      lang: 'en' // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
    })
  })
  return (
    <>
      <div id='twikoo'></div>
    </>
  )
}

export default Twikoo
