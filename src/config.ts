import packageJson from '../package.json'

export type Config = {
  APP_NAME: string
  API_URL: string
  BUILD_VERSION: string
}

export const config: Config = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  API_URL: import.meta.env.VITE_API_URL,
  BUILD_VERSION: packageJson.version || import.meta.env.VITE_BUILD_VERSION,
}
