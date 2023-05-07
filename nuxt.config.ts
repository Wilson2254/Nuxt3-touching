const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Nuxt APP",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Интернет-магазин",
        },
      ],
      link: [{ rel: "shortcut icon", href: "favicon.ico" }],
    },
  },
  rootDir: __dirname,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["normalize.css"],
  modules: ["nuxt-quasar-ui", "nuxt-lazy-hydrate"],
  quasar: {},
  vite: {
    mode: isDev ? "develop" : "production",
  },
  build: {
    transpile: ["vue-lazy-hydration"],
  },
  postcss: {
    ...(!isDev && {
      preset: {
        browsers: "cover 99.5%",
        autoprefixer: true,
      },
    }),
  },
});
