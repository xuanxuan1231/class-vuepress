import comp from "D:/class/class-vuepress/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"heroText\":\"初二三班\",\"heroFullScreen\":true,\"tagline\":\"MAN!\",\"projects\":[{\"icon\":\"school\",\"name\":\"学校官网\",\"desc\":\"北大附中新馨学校\",\"link\":\"https://bdfzxxxx.bjhdedu.cn\"},{\"icon\":\"project\",\"name\":\"may.pp.ua\",\"desc\":\"本站开发者主页\",\"link\":\"https://m.may.pp.ua\"}],\"footer\":\"<a href=\\\"https://icp.gov.moe/?keyword=20240336\\\" target=\\\"_blank\\\">萌ICP备20240336号</a><br>Powered by VuePress\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xn--2026-y94f186ei01b.top/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"初二三班 · 主站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"初二三班\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.33,\"words\":98},\"filePathRelative\":\"README.md\",\"excerpt\":\"<br>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
