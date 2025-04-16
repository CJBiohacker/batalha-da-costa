import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  type: import.meta.env.VITE_FIREBASE_TYPE,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.VITE_FIREBASE_PRIVATE_KEY_ID,
  privateKey: import.meta.env.VITE_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  clientEmail: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.VITE_FIREBASE_CLIENT_ID,
  auth_uri: import.meta.env.VITE_FIREBASE_AUTH_URI,
  token_uri: import.meta.env.VITE_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env.VITE_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: import.meta.env.VITE_FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: import.meta.env.VITE_FIREBASE_UNIVERSE_DOMAIN,
};

const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);
