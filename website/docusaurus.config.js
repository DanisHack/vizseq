/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'VizSeq',
  tagline: 'A visual analysis toolkit for text generation tasks',
  url: 'https://facebookresearch.github.io',
  baseUrl: '/vizseq/',
  favicon: 'img/favicon.png',
  organizationName: 'facebookresearch',
  projectName: 'vizseq',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-151434920-1',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'VizSeq',
        src: 'img/logo.png',
      },
      links: [
        {to: '/#quickstartSection', label: 'Quickstart', position: 'right'},
        {to: 'docs/overview', label: 'Docs', position: 'right'},
        {href: 'https://github.com/facebookresearch/vizseq', label: 'VizSeq@GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Overview', to: 'docs/overview'},
            {label: 'Installation', to: 'docs/getting_started/installation'},
            {label: 'Jupyter Notebook Example', to: 'docs/getting_started/ipynb_example'},
            {label: 'Web App Example', to: 'docs/getting_started/web_app_example'},
            {href: 'https://github.com/facebookresearch/vizseq', label: 'VizSeq@GitHub'},
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
