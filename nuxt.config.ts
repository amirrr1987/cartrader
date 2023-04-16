// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt', 'nuxt-icon'
],

app: {
    head: {
        title: 'Amir Maghami',
        meta: [
            {
                name: 'description',
                content: 'Every thing about Nuxt 3'
            }
        ],
        link: [
            {
                rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins'
            }
        ]
    }
}
})