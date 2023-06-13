module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5'),
    }
  }
});
