// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { IS_PREVIEW , PR_NUMBER } from "./PREVIEW";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Class Widgets Docs',
  tagline: 'Class Widgets 文档',
  favicon: 'favicon.ico',

  themes: ['@docusaurus/theme-mermaid'],

  // Production URL of the site
  url: 'https://cw-docs.rinlit.cn',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'Class-Widgets',
  projectName: 'Docs',

  onBrokenLinks: 'throw', // Option to throw error on broken links
  onBrokenMarkdownLinks: 'warn', // Option to show a warning on broken markdown links

  // Internationalization
  i18n: {
    defaultLocale: 'zh', // Set default locale to Simplified Chinese
    locales: ['zh', 'en'], // Supported locales
  },

  // Presets to configure various parts of the site
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve docs at the site's root
          sidebarPath: './sidebars.ts', // Path to your sidebar config
          editUrl: 'https://github.com/Class-Widgets/Docs/tree/main/', // URL for editing the docs
        },
        theme: {
          customCss: './src/css/custom.css', // Path to your custom CSS
        },
      },
    ],
  ],

  // Theme configuration for Navbar, Footer, and Prism (code highlighting)
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg', // Image for social sharing

    // Navbar configuration
    navbar: {
      title: 'Class Widgets',
      logo: {
        alt: 'Class Widgets Logo',
        src: 'favicon.ico', // Logo image path
      },
      items: [
        {
          type: 'doc',
          docId: 'about', // Document ID to link to
          position: 'left',
          label: '了解', // Label for the navbar item
        },
        {
          type: 'docSidebar', // Link to docs sidebar
          sidebarId: 'userDocsSidebar', // Sidebar configuration ID
          position: 'left',
          label: '使用说明', // Label for the docs section
        },{
          type: 'docSidebar', // Link to docs sidebar
          sidebarId: 'devDocsSidebar', // Sidebar configuration ID
          position: 'left',
          label: '开发', // Label for the docs section
        },{
          type: 'docSidebar', // Link to docs sidebar
          sidebarId: 'standardsSidebar', // Sidebar configuration ID
          position: 'left',
          label: '社区', // Label for the docs section
        },{
          type: 'localeDropdown',
          position: 'right', // Position of the locale dropdown
          dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://zh.crowdin.com/project/cw-docs',
                label: '帮助翻译',
              },
            ],
        },{
          href: 'https://classwidgets.rinlit.cn',
          label: '官网',
          position: 'right',
        },{
          href: 'https://github.com/Class-Widgets',
          label: 'GitHub', // GitHub link
          position: 'right', // Right side of the navbar
        },
      ],
    },

    // Footer configuration
    footer: {
      style: 'dark', // Dark style for footer
      links: [
        {
          title: '文档', // Section title
          items: [
            {
              label: '使用说明', // Item label
              to: '/', // Link to the "intro" document
            },{
              label: '开发', // Item label
              to: '/', // Link to the "intro" document
            },
          ],
        },
        {
          title: '社区', // Social accounts section
          items: [
            {
              label: 'Discord', // Social media link label
              href: 'https://discord.gg/xhZqhGuBxu', // Social media link (X/Twitter)
            },{
              label: 'QQ', // Social media link label
              href: 'https://qun.qq.com/universal-share/share?ac=1&authKey=L5dC%2B02XrjoB5ArYYGFBip7aGqTdreXdEoAb1X5%2BtQJUzwCjYd97t98xGBdsYohR&busi_data=eyJncm91cENvZGUiOiI2OTg1OTk4OTgiLCJ0b2tlbiI6InFaeGdlbnpoOHM1WHllMEp0SUNsUnZxTmdsM280K3FJRmdHbm1UNEFEUGplQk9YdUs2bXFEeWRSaGUvQUJLK2ciLCJ1aW4iOiIxOTg1NDA5NzExIn0=&data=1EBWxjW-zxlIdsZbE--bdpkjBQBz8UG_SHTt8j325Z3iawQVQKMthE6TXv-xA_VVGpTIZDMPqzpIQRfsUP4cVg&svctype=4&tempid=h5_group_info', // Social media link (X/Twitter)
            }
          ],
        },
        {
          title: '更多', // More section
          items: [
            {
              label: 'GitHub', // GitHub link
              href: 'https://github.com/Class-Widgets', // Docusaurus GitHub link
            },
          ],
        },
      ],
      copyright: IS_PREVIEW?`Preview for <a href="https://github.com/Class-Widgets/Docs/pull/${PR_NUMBER}">PR-${PR_NUMBER}</a>`:`Copyright © ${new Date().getFullYear()} Class Widgets.`,
    },

    // Code syntax highlighting configuration
    prism: {
      theme: prismThemes.github, // Light theme for code blocks
      darkTheme: prismThemes.dracula, // Dark theme for code blocks
    }
  },
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/instruction')) {
            var result = existingPath.replace('/instruction', '/user_docs');
            if (existingPath.includes('/advanced-settings')) {
              result = result.replace('/advanced-settings', '/advanced');
            }
            if (existingPath.includes('/course_schedule')) {
              result = result.replace('/course_schedule', '/schedule');
            }
            if (existingPath.includes('/about_Class_Widgets')) {
              return [
                existingPath.replace('/instruction/about_Class_Widgets', '/about'),
              ];
            }
            return [
              result,
            ];
          }
          if (existingPath.includes('/dev')) {
            var result = existingPath.replace('/dev_docs', '/dev');
            if (existingPath.includes('/Plugin-Writing')) {
              result = result.replace('/Plugin-Writing', '/plugin');
            }
            return [
              result,
            ];
          }
          if (existingPath.includes('/community')) {
            return [
              existingPath.replace('/community', '/standards'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
};

export default config;
