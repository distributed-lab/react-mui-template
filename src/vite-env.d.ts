/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_BUILD_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
