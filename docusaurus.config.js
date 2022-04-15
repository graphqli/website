// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Graphqli Docs',
  tagline: 'The most powerful Headless CMS for your Content with Team Collaborations, Revision, CDN & Much more ..',
  url: 'https://graphqli.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'graphqli', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-149868545-3',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-N6YVZ4KXPW',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Graphqli Docs',
        logo: {
          alt: 'Graphqli Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs/',
            label: 'Index',
            position: 'left',
          },
          {
            to: 'docs/build-api-quick-start-guide',
            activeBasePath: 'docs/build-api-quick-start-guide',
            label: 'Getting Started',
            position: 'left',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://graphqli.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://app.graphqli.com',
            label: 'Graphqli Console',
            position: 'right',
          },
          {
            href: 'https://github.com/graphqli/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/build-api-quick-start-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/graphqli',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4EmZYYQATb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/graphqli',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/graphqli',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Graphqli. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 40,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
