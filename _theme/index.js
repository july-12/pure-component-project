module.exports = {
  lazyload: false,
  home: '/',
  plugins: [
    'bisheng-plugin-react?lang=__react',
  ],
  routes: {
    path: '/',
    component: './template/Layout',
    indexRoute: { component: './template/Home' }
  },
}
