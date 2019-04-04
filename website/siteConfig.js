/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = require('./data/users');

const siteConfig = {
  title: 'Casbin' /* title for your website */,
  tagline: 'An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, PHP and Node.js',
  url: 'https://casbin.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'casbin.github.io',
  organizationName: 'casbin',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'overview', label: 'Docs'},
    {doc: 'management-api', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {languages: true},
    {search: true},
    {href: 'https://github.com/casbin', label: "GitHub"},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/casbin.svg',
  footerIcon: 'img/casbin.svg',
  favicon: 'img/favicon.png',

  algolia: {
    apiKey: '2b87bf88e794912bdbe1b08420681efa',
    indexName: 'casbin',
    algoliaOptions: {
      facetFilters: ['language:LANGUAGE'],
    },
  },

  /* colors for website */
  colors: {
    primaryColor: "#443d80",
    secondaryColor: "#383269",
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Casbin contributors.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    // theme: 'default',
    // theme: 'railscasts',
    theme: 'monokai-sublime',
    // theme: 'androidstudio',
    // theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],
  stylesheets: ['/css/code-blocks-buttons.css'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  cname: 'casbin.org',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/casbin/casbin',
  goRepoUrl: 'https://github.com/casbin/casbin',
  javaRepoUrl: 'https://github.com/casbin/jcasbin',
  phpRepoUrl: 'https://github.com/php-casbin/php-casbin',
  nodeRepoUrl: 'https://github.com/casbin/node-casbin',

  // Tracking ID of Google Analytics
  gaTrackingId: 'UA-119750650-1',

  // URL for editing docs, usage example: editUrl + 'en/doc1.md'.
  editUrl: 'https://github.com/casbin/casbin-website/edit/master/docs/',

  // Allow URLs with no .html extension
  cleanUrl: true,

  // Enable the docs showing last update time
  enableUpdateTime: true,

  // Enable the scroll to top button at the bottom of your site
  scrollToTop: true,

  translationRecruitingLink: 'https://crowdin.com/project/casbin',

  // Twitter
  twitter: 'true',
  twitterUsername: 'CasbinNews',
  /* Open Graph and Twitter card images */
  ogImage: 'img/casbin.svg',
  twitterImage: 'img/casbin.svg',

  // Facebook
  facebookAppId: '1354585054683583',
  facebookComments: true,
};

module.exports = siteConfig;
