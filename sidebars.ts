import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  userDocsSidebar: [
    'instruction/index',
    'instruction/install',
    ,{
      type: 'category', 
      label: '课程表',
      collapsible: true, 
      collapsed: false,
      items: [
        'instruction/schedule/file', 'instruction/schedule/timeline', 'instruction/schedule/courses', 'instruction/schedule/adjustment'
      ],
      link: {
        type: 'doc',
        id: 'instruction/schedule/index', // Link to the first item in the category
      }
    },{
      type: 'category',
      label: '高级',
      collapsible: true,
      collapsed: true,
      items: [
        'instruction/advanced/notification', 'instruction/advanced/customization', 'instruction/advanced/theme', 'instruction/advanced/weather'
      ],
      link: {
        type: 'doc',
        id: 'instruction/advanced/index', // Link to the first item in the category
      }
    },{
      type: 'category',
      label: '常见问题',
      collapsible: true,
      collapsed: true,
      items: [
        'instruction/faq/pp-network'
      ],
      link: {
        type: 'doc',
        id: 'instruction/faq/index', // Link to the first item in the category
      }
    }
  ],
  devDocsSidebar: [
    'dev/index',
    'dev/configuration',
    {
      type: 'category',
      label: '插件编写',
      collapsible: true,
      collapsed: true,
      items: [
        'dev/plugin/overview', 
        'dev/plugin/structure', 
        'dev/plugin/context', 
        'dev/plugin/method', 
        'dev/plugin/advanced'
      ],
      link: {
        type: 'doc',
        id: 'dev/plugin/index',
      }
    }
  ],
  standardsSidebar: ['community/index', 'community/user', 'community/admin'],
};

export default sidebars;
