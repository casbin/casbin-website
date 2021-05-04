/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Casbin',
  tagline: 'An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir',
  url: 'https://casbin.org',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'casbin', // Usually your GitHub org/user name.
  projectName: 'casbin.github.io', // Usually your repo name.
  
  i18n: {
    defaultLocale: 'English',
    locales: ['English', '中文', '한국어', 'Pусский', 'Français', '日本語'],
  },

  themeConfig: {

    //Website navbar config
    navbar: {
      title: 'Casbin',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/casbin.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          label: 'API',
          docId: 'management-api',
          position: 'left',
        },
        {to: 'editor', label: 'Editor', position: 'left'},
        {
          type: 'doc',
          label: 'IDE plugins',
          docId: 'ide-plugins',
          position: 'left'
        },
        {
          label: 'Casdoor',
          href: 'https://door.casbin.com/login',
          position: 'left'
        },
        {
          label: 'Forum',
          href: 'https://forum.casbin.com/',
          position: 'left'
        },
        {
          label: 'OA',
          href: 'https://oa.casbin.com/',
          position: 'left'
        },
        {
          label: 'Trend',
          href: 'https://trend.casbin.org/'
        },
        {
          label: 'Help',
          to: 'help'

        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://crowdin.com/project/casbin-v2',
              label: 'Help Us Translate',
            }
          ]
        },
        {
          href: 'https://github.com/casbin/casbin',
          className: 'header-github-link',
          position: 'right',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    //Website footer config
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/overview',
            },
            {
              label: 'Getting Started',
              to: '/docs/get-started',
            },
            {
              label: 'Management API',
              to: '/docs/management-api',
            },
            {
              label: 'RBAC API',
              to: '/docs/rbac-api',
            },
            {
              label: 'Middlewares',
              to: '/docs/middlewares',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.casbin.com/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/search?q=casbin',
            },
            {
              label: 'Project Chat',
              href: 'https://gitter.im/casbin/Lobby'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog/2020-04-21-google-award',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/casbin/casbin',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 Casbin contributors.`,
    },
    announcementBar: {
      id: 'announcement', // ID of the announcement bar
      content:
        '<a href="https://github.com/casbin/casdoor">💖 Also need authentication/SSO? Find more at: Casdoor🚪</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42', // 默认为 `#000`。
      isCloseable: false, // 默认为 `true`。
    },
  },
  presets: [
    /*
    plugins, [
      '@docusaurus/plugin-content-blog',
      {
        path: 'blog',
        routeBasePath: 'blog',
        include: ['*.md', '*.mdx'],
      },
    '@docusaurus/plugin-content-pages',
    ],
    */
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/casbin/casbin-website/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
