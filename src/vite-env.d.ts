/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAP_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
