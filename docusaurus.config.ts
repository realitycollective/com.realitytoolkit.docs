import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  title: 'Reality Toolkit',
  tagline: 'Official documentation for the Reality Toolkit by the Reality Collective',
  favicon: 'img/favicon.ico',
  url: 'https://www.realitytoolkit.io',
  baseUrl: '/',
  organizationName: 'realitycollective',
  projectName: 'com.realitytoolkit.docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/realitycollective/com.realitytoolkit.docs/edit/main/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'https://github.com/realitycollective/realitycollective.logo/blob/main/RealityToolkit/RepoBanners/com.realitytoolkit.core.png?raw=true',
    navbar: {
      title: 'Reality Toolkit',
      logo: {
        alt: 'Reality Collective',
        src: 'https://github.com/realitycollective/realitycollective.logo/blob/main/Branding/RealityCollective_IconLogo.png?raw=true'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation'
        },
        {
          href: 'https://discord.gg/YjHAQD2XT8',
          label: 'Join Us On Discord',
          position: 'left'
        },
        {
          href: 'https://github.com/realitycollective/realitytoolkit.dev',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
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
              label: 'GitHub',
              href: 'https://github.com/realitycollective/com.realitytoolkit.core',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Reality Collective. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
