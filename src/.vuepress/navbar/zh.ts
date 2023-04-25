import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "article",
    link: "/articles/essay1",
  },
  {
    text: "笔记",
    icon: "note",
    link: "/notes/vue/",
  },
  {
    text: "工具",
    icon: "tool-fill",
    prefix: "/tools/",
    children: [
      {text: "MOMENT", icon: "time", link: "moment",},
      {text: "git", icon: "git", link: "git",},
      {text: "ECHARTS", icon: "echartstat", link: "echarts",},
    ],
  },
  {
    text: "留言板",
    icon: "message-board",
    link: "/messageBoard",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "我的项目",
    icon: "project",
    prefix: "/projects/",
    children: [
      {text: "vuepress-plugin-background", icon: "background", link: "vuepress-plugin-background",},
    ],
  },
  {
    text: "关于",
    icon: "about",
    prefix: "/about/",
    children: [
      {text: "关于本站", icon: "site", link: "aboutSite",},
      {text: "关于我", icon: "me", link: "aboutMe",},
    ],
  },
]);
