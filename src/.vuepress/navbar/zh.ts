import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "article",
    link: "/article",
  },
  {
    text: "笔记",
    icon: "note",
    link: "/notes/vue",
  },

  {
    text: "留言板",
    icon: "mark",
    link: "/messageBoard",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "info",
    link: "/about",
  },
]);
