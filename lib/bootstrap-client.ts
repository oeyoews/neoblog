import * as config from '@/lib/config'

export function bootstrap() {
  console.log(`
   This site is built using Notion, Next.js, and https://github.com/oeyoews.
`)

  console.log(
    '%c📣 Yay! Notion is working! 🎉',
    'background: linear-gradient(45deg, #dce35b, #45b649); color: black;border-radius: 3px;padding: 3px;'
  )
  if (config.utterancesGitHubRepo) {
    console.log(
      '%c❄️ Yay! Comments is working! 🎉',
      'background: linear-gradient(145deg, #dce35b, #45b649); color: black;border-radius: 3px;padding: 3px;'
    )
  }
}
