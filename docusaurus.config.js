/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Malil',
  tagline: 'Malil the all in one discord bot',
  url: 'https://malilbot.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'skyblockdev', // Usually your GitHub org/user name.
  projectName: 'malil', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Malil',
      logo: {
        alt: 'Malil logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://discord.com/oauth2/authorize?client_id=749020331187896410&permissions=117824&scope=bot%20applications.commands',
          label: 'Invite',
          position: 'right',
        },
        {
          href: 'https://github.com/malilbot/malilbot.github.io/',
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
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/KkMKCchJb8',
            },
            {
              label: 'Top.gg',
              href: 'https://top.gg/bot/749020331187896410',
            },
            {
              label: 'Bots.gg',
              href: 'https://discord.bots.gg/bots/749020331187896410',
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
      copyright: `Copyright © ${new Date().getFullYear()} Malil, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/malilbot/malilbot.github.io/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/malilbot/malilbot.github.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
