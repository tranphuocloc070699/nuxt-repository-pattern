// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {/**/
    public: {
      /*This operation || for the case env not found*/
      NUXT_BASE_URL_PROXY_SERVER: process.env.NUXT_BASE_URL_PROXY_SERVER || 'https://defaultServer',
    },
    NUXT_BASE_URL_JSON_PLACEHOLDER_SERVER: process.env.NUXT_BASE_URL_JSON_PLACEHOLDER_SERVER,
    NUXT_BASE_URL_ANOTHER_SERVER: process.env.NUXT_BASE_URL_ANOTHER_SERVER,
  },
  modules:["@pinia/nuxt"]
})
