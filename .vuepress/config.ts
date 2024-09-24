import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "初二三班 · 主站",
  description: "feedId:61359350209310720+userId:58800746790506496",

  theme,


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
