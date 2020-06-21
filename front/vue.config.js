module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: "pug-plain-loader"
                }
            ]
        },
        devtool: 'source-map'
    },
    transpileDependencies: [ "vuetify" ]
}