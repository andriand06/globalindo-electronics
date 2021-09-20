import {initializeApp} from 'firebase/app';
import 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAFaYC0P7CDc6vlreCAiRBhhDleMnjgyKA",
    authDomain: "globalindo-electronics.firebaseapp.com",
    projectId: "globalindo-electronics",
    storageBucket: "globalindo-electronics.appspot.com",
    messagingSenderId: "740157046297",
    appId: "1:740157046297:web:dda83812853f9c222c3488",
    measurementId: "G-0VGHVRTCG7"
  };

  const app = initializeApp(config);
//   export const fireStore = app.fireStore();
  export const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    