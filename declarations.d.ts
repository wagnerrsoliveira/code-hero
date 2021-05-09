declare module 'react-native-config' {
  interface Env {
    API_BASE_URL: string;
    PUBLIC_KEY: string;
    PRIVATE_KEY: string;
  }
  const BuildConfig: Env;
  export default BuildConfig;
}
