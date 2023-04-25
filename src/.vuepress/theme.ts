import { localTheme } from "./theme/index";
import { zhNavbar } from "./navbar/index.js";
import sidebar  from "./sidebar/index";

export default localTheme({
  hotReload: false,
  hostname: "https://sherrysr.top/",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,
  author: {
    name: "孤独的暖阳",
    url: "https://sherrysr.top/",
  },

  iconAssets: [
    // 彩色图标
    "//at.alicdn.com/t/c/font_4010461_3e4sow11e3d.css",
    // 无色图标
    "//at.alicdn.com/t/c/font_3589698_9wf775d3js.css",
  ],

  logo: "/logo.svg",

  repo: "https://github.com/S-sherry-R/PersonalBlog",

  docsDir: "docs",

  blog: {
    medias: {
      Gitee: "https://gitee.com/sherrySR",
      GitHub: "https://github.com/S-sherry-R",
      BiliBili: "https://space.bilibili.com/3493088093801092?spm_id_from=333.999.0.0",
    },
    name: "孤独的暖阳",
    articlePerPage: 5
  },
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: sidebar,

      footer: "默认页脚",

      displayFooter: false,

      blog: {
        description: "死人唯一做的事就是把活着这事给搞砸了",
        intro: "/about.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  // navbarAutoHide: "always",
  // 加密
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,
    git: true,
    feed: {
      rss: true,
    },
    comment: {
      provider: "Waline",
      serverURL: "https://waline.sherrysr.top/", // your server url
      reaction: true,
      requiredMeta:['nick'],//设置必填项，默认匿名
      wordLimit:400,//字数限制
      emoji:[
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://unpkg.com/@waline/emojis@1.1.0/bilibili",
      ],
      locales:{
        "/":{
          placeholder:"欢迎留言（￣▽￣）～■□～（￣▽￣）　(填写常用邮箱即可快速收到回复通知~)"
        }
      }
    },
    prismjs: false,
    copyright: {
      author: "sherrySR",
      license: "CC BY-NC-SA 4.0",
      global: true,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
