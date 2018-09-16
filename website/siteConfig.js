/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Intel RMD',
    image: 'img/users/intel.png',
    infoLink: 'https://github.com/intel/rmd',
    pinned: true,
  },
  {
    caption: 'VMware Dispatch',
    image: 'img/users/vmware.png',
    infoLink: 'https://github.com/vmware/dispatch',
    pinned: true,
  },
  {
    caption: 'Casbin Authorization Plugin',
    image: 'img/users/docker.png',
    infoLink: 'https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins',
    pinned: true,
  },
  {
    caption: 'Banzai Pipeline',
    image: 'img/users/banzai.png',
    infoLink: 'https://github.com/banzaicloud/pipeline',
    pinned: true,
  },
  {
    caption: 'Orange Gobis',
    image: 'img/users/orange.png',
    infoLink: 'https://github.com/orange-cloudfoundry/gobis',
    pinned: true,
  },
  {
    caption: 'Tencent Cloud',
    image: 'img/users/tencent.png',
    infoLink: 'https://cloud.tencent.com',
    pinned: true,
  },
  {
    caption: 'Cisco Cloud',
    image: 'img/users/cisco.png',
    infoLink: 'https://www.cisco.com/c/en/us/solutions/cloud/overview.html',
    pinned: true,
  },
  {
    caption: 'Microsoft (internal use)',
    image: 'img/users/microsoft.png',
    pinned: true,
  },
];

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
    {doc: 'api', label: 'API'},
    {blog: true, label: 'Blog'},
    {search: true},
    {href: 'https://github.com/casbin', label: "GitHub"}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/casbin.svg',
  footerIcon: 'img/casbin.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
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
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  cname: 'casbin.org',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/casbin/casbin',

  // Tracking ID of Google Analytics
  gaTrackingId: 'UA-119750650-1',
};

module.exports = siteConfig;
