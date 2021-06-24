module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: process.env.VUE_PORT,
    proxy: `http://localhost:${process.env.VUE_PORT}`,
}
}
