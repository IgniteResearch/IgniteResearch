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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      navbar: {
        title: 'IGNITE RESEARCH',
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
            title: 'IGNITE RESEARCH',
            items: [
              
              {
                html: `
                <!-- Add font awesome icons -->
<a href="#" class="fa fa-facebook" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #3B5998;color: white;"></a>
<a href="#" class="fa fa-twitter" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #55ACEE;color: white;"></a>
<a href="#" class="fa fa-google" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #dd4b39;color: white;"></a>
<a href="#" class="fa fa-linkedin" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #007bb5;color: white;"></a>
<a href="#" class="fa fa-youtube" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #bb0000;color: white;"></a>
<a href="#" class="fa fa-instagram" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #125688;color: white;"></a>
<a href="#" class="fa fa-pinterest" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #cb2027;color: white;"></a>
<a href="#" class="fa fa-snapchat-ghost" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #fffc00;color: white;text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"></a>
<a href="#" class="fa fa-skype" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #00aff0;color: white;"></a>
<a href="#" class="fa fa-android" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #a4c639;color: white;"></a>
<a href="#" class="fa fa-dribbble" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #ea4c89;color: white;"></a>
<a href="#" class="fa fa-vimeo" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #45bbff;color: white;"></a>
<a href="#" class="fa fa-tumblr" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #2c4762;color: white;"></a>
<a href="#" class="fa fa-vine" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #00b489;color: white;"></a>
<a href="#" class="fa fa-foursquare" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #45bbff;color: white;"></a>
<a href="#" class="fa fa-stumbleupon" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #eb4924;color: white;"></a>
<a href="#" class="fa fa-flickr" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #f40083;color: white;"></a>
<a href="#" class="fa fa-yahoo" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #430297;color: white;"></a>
<a href="#" class="fa fa-reddit" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #ff5700;color: white;"></a>
<a href="#" class="fa fa-rss" style="display: inline-block;font: normal normal normal 14px/1 FontAwesome;font-size: 30px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;padding: 10px;width: 40px;text-align: center;text-decoration: none;margin: 4px 1px;background: #ff6600;color: white;"></a>
`,
              },
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
        page_id: '1970159599725916'
      },
    }),
};

module.exports = config;
