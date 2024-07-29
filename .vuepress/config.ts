import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "初二三班 · 主站",
  description: "北大附中新馨学校初二三班官方网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
