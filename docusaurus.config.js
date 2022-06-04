// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reality Toolkit',
  tagline: 'Official documentation for the Reality Toolkit by the Reality Collective',
  url: 'https://www.realitytoolkit.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'realitycollective',
  projectName: 'com.realitytoolkit.docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/realitycollective/com.realitytoolkit.docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reality Toolkit',
        logo: {
          alt: 'Reality Collective',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://discord.gg/YjHAQD2XT8',
            label: 'Join Us On Discord',
            position: 'left',
          },
          {
            href: 'https://github.com/realitycollective/realitytoolkit.dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/YjHAQD2XT8',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/realitytoolkit',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://realitycollective.io/blog',
              },
              {
                label: 'Reality Collective Website',
                href: 'https://realitycollective.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/realitycollective/realitytoolkit.dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reality Collective. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
