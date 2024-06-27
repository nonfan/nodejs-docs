import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: "category",
      label: "核心模块",
      link: {
        type: 'generated-index',
        description: "核心模块是 Node.js 提供的一组内置库，它们无需额外安装，可以直接在 Node.js 应用中使用。这些模块涵盖了文件系统操作、网络通信、数据处理等多方面的功能，是开发 Node.js 应用程序时不可或缺的基础工具。"
      },
      items: [
        "core-modules/file-system",
        "core-modules/path",
        "core-modules/http",
        "core-modules/https",
        "core-modules/url",
        "core-modules/events",
        "core-modules/stream",
        "core-modules/buffer",
        "core-modules/crypto",
        "core-modules/os",
        "core-modules/process",
        "core-modules/child-process",
        "core-modules/cluster",
        "core-modules/net",
        "core-modules/debugger",
        "core-modules/timers",
      ]
    },
    'async-programing',
    {
      type: "category",
      label: "常用库和框架",
      items: [
        "common-libraries-and-frameworks/express",
        "common-libraries-and-frameworks/koa",
        "common-libraries-and-frameworks/socket",
        "common-libraries-and-frameworks/mongoose",
        "common-libraries-and-frameworks/sequelize",
        "common-libraries-and-frameworks/passportjs",
        "common-libraries-and-frameworks/joi",
      ]
    },
    {
      type: "category",
      label: "性能优化",
      items: [
        "performance-optimization/memory-management",
        "performance-optimization/event-loop",
        "performance-optimization/asynchronous-i-or-o",
        "performance-optimization/load-balancing",
      ]
    }
  ],
};

export default sidebars;
