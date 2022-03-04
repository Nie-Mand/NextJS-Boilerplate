const prefix = '/v1'

const endpoints = {
  prefix,
  global: {
    get: () => prefix + '/',
  },
}

export default endpoints
