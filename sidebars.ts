import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'whats-axentax',
    'screen-guide',
    'quick-start',
    {
      type: 'category',
      label: 'チュートリアル',
      link: { type: 'generated-index' },
      items: [
        'tutorial/basic-syntax',
        'tutorial/craft-syntax',
        'tutorial/ornament-syntax',
        'tutorial/practice-syntax',
        'tutorial/special-syntax'
      ],
      "collapsed": false
    },
    {
      type: 'category',
      label: 'セッティング',
      link: { type: 'generated-index' },
      items: [
        'settings/basic-settings',
      ],
      "collapsed": false
    },
    'xqa'
    // {
    //   type: 'category',
    //   label: 'チュートリアル（基本）',
    //   link: { type: 'generated-index' },
    //   items: [
    //     'tutorial-basics/create-a-document',
    //     'tutorial-basics/create-a-page',
    //     'tutorial-basics/create-a-blog-post',
    //     'tutorial-basics/markdown-features',
    //     'tutorial-basics/deploy-your-site',
    //     'tutorial-basics/congratulations',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'チュートリアル（追加）',
    //   link: { type: 'generated-index' },
    //   items: [
    //     'tutorial-extras/manage-docs-versions',
    //     'tutorial-extras/translate-your-site',
    //   ],
    // },
  ],
};

export default sidebars;
