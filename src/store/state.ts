export interface State {
  debug: boolean
  version: string
  isInitialized: boolean
  count: number
  conversionRateApi?: string
}

const versionString =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_VERSION + '-dev'
    : import.meta.env.VITE_APP_VERSION

export const state: State = {
  debug: import.meta.env.MODE === 'development',
  version: versionString,
  isInitialized: false,
  count: 0,
  conversionRateApi: import.meta.env.VITE_APP_CONVERSION_RATE_API
}
