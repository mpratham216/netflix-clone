import { initializeApp } from "@firebase/app";
import { getAuth, connectAuthEmulator } from "@firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCZ7GmLdMbittu_swLC2_IrW1eKSw2RIZM",
  authDomain: "netflix-4900b.firebaseapp.com",
  projectId: "netflix-4900b",
  storageBucket: "netflix-4900b.appspot.com",
  messagingSenderId: "814509800898",
  appId: "1:814509800898:web:bffd0976b06c0db6766a5b"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");


export { auth }
export default firebaseApp;

