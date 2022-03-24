module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a73daeede3c6022284d689d1d953e90b'),
  },
});
