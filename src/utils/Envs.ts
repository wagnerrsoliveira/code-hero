import BuildConfig from 'react-native-config';

const {API_BASE_URL, PRIVATE_KEY, PUBLIC_KEY} = BuildConfig;

export const env = {
  apiBaseUrl: API_BASE_URL,
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
};
