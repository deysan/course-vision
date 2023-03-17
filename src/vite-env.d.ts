/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_REQUEST_HEADER: string;
  readonly VITE_API_REQUEST_BODY: string;
  readonly VITE_API_REQUEST_SIGNATURE: string;
  readonly VITE_API_REQUEST_URL: string;
}
