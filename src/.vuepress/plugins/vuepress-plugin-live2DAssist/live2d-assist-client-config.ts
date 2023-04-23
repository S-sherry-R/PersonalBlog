import { defineClientConfig, usePageData, useSiteData } from "@vuepress/client";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to) => {});
    router.afterEach((to) => {});
  },
  setup() {
    onMounted(() => {
      // 获取 vue-router 实例
      const router = useRouter();
      router.beforeEach((to) => {
        if (to.path == "/") {
          switchOml(true);
        } else {
          switchOml(false);
        }
      });
      setTimeout(() => {
        const path = usePageData().value.path;
        if (path == "/") {
          switchOml(true);
        } else {
          switchOml(false);
        }
      }, 1000);
    });
    (function log() {
      console.log(
          `%c ✨孤独的暖阳的博客 v2.1.0✨ %c ✨sherrySR's Blog✨ `,
          `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
          `background: #030307; padding:5px; font-size:12px; color:#fff;`,
      );
  })();
  },
  layouts: {},
  rootComponents: [],
});

function switchOml(show: boolean) {
  if (window.screen.availWidth < 719) {
    //移动端
    let omlb = document.getElementById("oml-levitated-btn");
    omlb && (omlb.style.display = "none");
    return;
  }
  let oml = document.getElementById("oml-stage");
  let omlt = document.getElementById("oml-tips");
  if (show) {
    oml && (oml.style.visibility = "visible");
    omlt && (omlt.style.display = "block");
  } else {
    oml && (oml.style.visibility = "hidden");
    omlt && (omlt.style.display = "none");
  }
}
