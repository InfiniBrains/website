module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "users-permissions": {
    config: {
      jwtSecret: env('JWT_SECRET', require('crypto').randomBytes(256).toString('base64')), // crypto.randomBytes(16).toString('base64')),
    }
  },
});
