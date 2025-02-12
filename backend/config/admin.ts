export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','EQWDZxQjIJiGomhhsVWLGg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','JJZWlClYHZVMdznVpOXmkw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','Lom/AKwqIo5LSoCjZGzAwg=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
