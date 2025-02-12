module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS',['jn3FDs9sSmozQxEaPIMgwQ==','pYGypcTbFsuo0lZ0ptbk5g==','AAWy72eWg8mOrqw6a2zX0g==','od4+oovwpX3npwdgTzrQ0g==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  proxy: {
    trustProxy: true,
  },
});
