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
        'settings/sample-settings',
      ],
      "collapsed": false
    },
    'shortcut-keys',
    'xqa',
    // 'message-to-generator-ai.md'
  ],
};

export default sidebars;
