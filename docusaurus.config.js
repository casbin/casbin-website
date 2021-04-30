/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Casbin',
  tagline: 'An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir',
  url: 'https://casbin.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'casbin', // Usually your GitHub org/user name.
  projectName: 'casbin.github.io', // Usually your repo name.
  
  themeConfig: {

    //Website navbar config
    navbar: {
      title: 'Casbin',
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
          label: 'API',
          docId: 'management-api',
          position: 'left',
        },
        {
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

        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/casbin/casbin',
          label: 'GitHub',
          position: 'right',
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
              label: 'Getting Started',
              to: '/blog/get-started'
            },
            {
              label: 'Docs',
              to: '/docs/overview',
            },
            {
              label: 'Management API',
              to: '/docs/management-api'
            },
            {
              label: 'RBAC API',
              to: '/docs/rbac-api'
            },
            {
              label: 'Middlewares',
              to: '/docs/middlewares'
            }
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
              to: '/blog/overview',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/casbin/casbin',
            },
            {
              label: 'Follow @CasbinNews',
              href: 'https://twitter.com/CasbinNews'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'announcement', // 用于标记此消息的任何值。
      content:
        '<a href="https://github.com/casbin/casdoor">💖 Also need authentication/SSO? Find more at: Casdoor</a>',
      backgroundColor: '#fafbfc', // 默认为 `#fff`。
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
