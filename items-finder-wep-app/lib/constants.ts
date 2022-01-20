import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const { meliMiddleEndUrl, meliIcon } = publicRuntimeConfig

export { 
    meliMiddleEndUrl,
    meliIcon
}