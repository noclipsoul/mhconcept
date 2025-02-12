module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '146.59.157.76'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'mhconcept'),
      user: env('DATABASE_USERNAME','mh'),
      password: env('DATABASE_PASSWORD', '69s*VmPG6[IIpOSs'),
      ssl: false,
    },
  },
});
