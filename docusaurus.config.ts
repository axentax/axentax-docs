import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Axentax',
  tagline: '直感操作 x 高精度コントロール で、音楽制作を加速',
  favicon: 'img/axe/axentax-logo-small.png',

  // Set the production url of your site here
  url: 'https://axentax.github.io/',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'axentax', // Usually your GitHub org/user name.
  projectName: 'axentax.github.io', // Usually your repo name.

  deploymentBranch: 'main',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'VEDZMZ5FGJ',
      apiKey: 'a317dc225a2425f119ad605ca7f6ec1c',
      indexName: 'axentaxio',
      contextualSearch: true,
      insights: true,
    },
    colorMode: {
      defaultMode: 'dark'
    },
     metadata: [
      { name: 'description', content: 'Axentaxは直感的な記述で音楽パターン・演奏表現を細密に制御できる次世代型サウンドスクリプト言語です。本ドキュメントでは基本から応用まで網羅的に解説しています。' },
      { name: 'keywords', content: 'Axentax, サウンドスクリプト, 音楽プログラミング, サウンドデザイン, 音楽制作, 自動演奏, 作曲支援, 音楽ツール' },
      { property: 'og:title', content: 'Axentax Documentation | サウンドコントロール新時代' },
      { property: 'og:description', content: '直感と緻密さを両立する新しいサウンド記述言語Axentaxの公式ドキュメント。基本から応用技術まで網羅的に掲載。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://axentax.github.io/' },
      { property: 'og:image', content: 'https://axentax.github.io/img/axe/axentax-logo.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Axentax Documentation | 高精度サウンドスクリプト' },
      { name: 'twitter:description', content: 'Axentaxは、自由度と精密さを両立した次世代型サウンドスクリプト言語です。公式ドキュメントはこちら。' },
      { name: 'twitter:image', content: 'https://axentax.github.io/' },
    ],
    // Replace with your project's social card
    image: 'img/axe/axentax-logo-small.png',
    navbar: {
      title: 'Axentax',
      logo: {
        alt: 'Axentax Logo',
        src: 'img/axe/axentax-logo-small.png',
      },
      items: [
        {
          to: '/docs/quick-start',
          position: 'left',
          label: 'Quickstart'
        },
        {
          to: 'https://axentax.github.io/axentax-playground/',
          label: 'Playground',
          position: 'left'
        },
        {
          href: 'https://github.com/axentax/axentax-playground',
          position: 'right',
          className: 'custom-github-icon',
          'aria-label': 'GitHub リポジトリ',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/axentax',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/axentax',
            // },
            {
              label: 'X',
              href: 'https://x.com/_axentax_',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Axentax.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
