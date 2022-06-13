module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                components: "@/components",
                views: "@/views",
                network: "@/network",
                assets: "@/assets",
                utils: "@/utils",
                mixin: "@/utils",
            },
        },
    },
};