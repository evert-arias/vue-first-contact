/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
module.exports = {
  lang: 'en-US',
  title: '👋 FirstContact - A ready-to-use contact form',
  description:
    'Fully customizable contact form that sends the data to your own endpoint or a free one hosted for you.',

  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/evert-arias/vue-first-contact',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Guide',
        children: getGuide(),
      },
    ],
  },
}

function getGuide() {
  return [
    { text: 'Installation', link: '/guide/installation' },
    { text: 'Initial Setup', link: '/guide/initial-setup' },
  ]
}
