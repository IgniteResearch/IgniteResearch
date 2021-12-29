// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IGNITE RESEARCH',
  tagline: 'Helping You Get Published',
  url: 'https://igniteresearch.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IgniteResearch', // Usually your GitHub org/user name.
  projectName: 'IgniteResearch', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],
  plugins: ["@skgandikota/docusaurus-plugin-facebookchat"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: 'Ignite Research',
        logo: {
          alt: 'Ignite Research',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ignite Research',
            items: [
              {
                html: `
<a href="https://www.facebook.com/ResearchPublicationConsultancy" class="fa fa-facebook" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 16px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 30px;text-align: center;text-decoration: none;margin: 5px 2px;background: #3B5998;color: white;" target="_blank"></a>
<a href="https://twitter.com/igniteresearch_" class="fa fa-twitter" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 16px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 30px;text-align: center;text-decoration: none;margin: 5px 2px;background: #55ACEE;color: white;" target="_blank"></a>
<a href="https://www.google.com/maps/dir/14.4568814,79.9975806/ignite+research/@14.4543688,79.9952558,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4c8cade7934153:0x8ec28f4c42f358e8!2m2!1d79.9959273!2d14.4518923" class="fa fa-map-marker" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 16px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 30px;text-align: center;text-decoration: none;margin: 5px 2px;background: #dd4b39;color: white;" target="_blank"></a>
<a href="https://www.linkedin.com/company/igniteresearch-india" class="fa fa-linkedin" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 16px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 30px;text-align: center;text-decoration: none;margin: 5px 2px;background: #007bb5;color: white;" target="_blank"></a>
<a href="https://www.youtube.com/channel/UCqED2kjOm3ruDBF9ivjOovQ" class="fa fa-youtube" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 16px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 30px;text-align: center;text-decoration: none;margin: 5px 2px;background: #bb0000;color: white;" target="_blank"></a>
`    },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IGNITE RESEARCH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
      facebookChat: {
        page_id: "1970159599725916"
      }
      
    }),
};

module.exports = config;
