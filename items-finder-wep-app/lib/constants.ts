import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

// const { meliMiddleEndUrl, meliIcon } = publicRuntimeConfig
const meliMiddleEndUrl  = publicRuntimeConfig?.meliMiddleEndUrl
const meliIcon = publicRuntimeConfig?.meliIcon

export { 
    meliMiddleEndUrl,
    meliIcon
}