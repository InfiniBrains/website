module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5', 'a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p6']),
  },
  url: env('STRAPI_URL'),
});
