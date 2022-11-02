declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MUMBAI_API_KEY: string;
      NEXT_PUBLIC_MUMBAI_URL: string;
      NEXT_PUBLIC_CHAIN_ID: 80001;
      NEXT_PUBLIC_ABI: string;
    }
  }
}
export {};
