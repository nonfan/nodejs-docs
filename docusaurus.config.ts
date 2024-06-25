import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';

import {
  username,
  repository,
  title,
  logoSrc,
  logoSrcDark,
  favicon,
  algolia,
} from './setting';

const config: Config = {
  title,
  favicon,
  trailingSlash: true,

  url: `https://${username}.github.io/`,
  baseUrl: `/${repository}`,

  // GitHub部署配置
  organizationName: username,
  projectName: repository,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${username}/${repository}/tree/main`,
          showLastUpdateTime: false,
          remarkPlugins: [
            require('remark-math'),
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    algolia,
    navbar: {
      title,
      logo: {
        alt: title,
        src: logoSrc,
        srcDark: logoSrcDark,
        width: 32,
        height: 32,
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   position: 'left',
        //   sidebarId: 'api',
        //   label: 'API',
        // },
        {
          href: `https://github.com/${username}/${repository}`,
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2024 by MoFan. Licensed under CC BY-NC 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
      additionalLanguages: ['json'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error',
          block: {
            start: 'error-start',
            end: 'error-end',
          },
        },
        {
          className: 'code-block-success-line',
          line: 'success',
          block: {
            start: 'success-start',
            end: 'success-end',
          },
        },
      ],
    },
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
