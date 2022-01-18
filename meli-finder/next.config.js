/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    meliMiddleEndUrl: process.env.MELI_MIDDLE_END_URL,
    meliIcon: process.env.MELI_ICON,
  },
  async redirects() {
    return []
  },
}
