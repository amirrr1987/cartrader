// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt', 'nuxt-icon', "nuxt-lodash"
    ],

    app: {
        head: {
            title: 'ExpressCar',
            meta: [
                {
                    name: 'description',
                    content: 'Find fast your car'
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