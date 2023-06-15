module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "users-permissions": {
    config: {
      jwtSecret: env('JWT_SECRET', require('crypto').randomBytes(256).toString('base64')), // crypto.randomBytes(16).toString('base64')),
    }
  },
  // config: {
  //   endpoint: '/graphql',
  //   shadowCRUD: true,
  //   playgroundAlways: false,
  //   depthLimit: 7,
  //   amountLimit: 100,
  //   apolloServer: {
  //     tracing: false,
  //   },
  // },
  // 'random-sort': {
  //   enabled: true,
  // },
  // 'migrations': {
  //   enabled: true,
  //   config: {
  //     autoStart: true,
  //     migrationFolderPath : 'migrations'
  //   },
  // },
});
