import {initializeApp} from 'firebase/app';
import {getFirestore, addDoc, setDoc, getDoc, doc, collection} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';  
//get the config from our firebase project -> console.firebase.google.com
const config =  {
    apiKey: "AIzaSyAFaYC0P7CDc6vlreCAiRBhhDleMnjgyKA",
    authDomain: "globalindo-electronics.firebaseapp.com",
    projectId: "globalindo-electronics",
    storageBucket: "globalindo-electronics.appspot.com",
    messagingSenderId: "740157046297",
    appId: "1:740157046297:web:dda83812853f9c222c3488",
    measurementId: "G-0VGHVRTCG7"
  };
  // initialize our app with the config
  const app = initializeApp(config);
  // get our firestore instance from our app, create our firestore first in console.firebase.google.com
  const db = getFirestore(app);
  //a method to createUserProfile 
  // we get the data from the doc method where the path is users/uid
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = doc(db,'users',`${userAuth.uid}`);
    //get our doc reference
    const querySnapshot = await getDoc(userRef);
    //if our doc ref exists then we set our doc (store) to our firestroe
    if(querySnapshot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
       await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      console.log("user created with id : ", userRef.id);
      } catch (error) {
        console.log("error creating user ", error.message);
      }
    } 
    return userRef;
  } ;
  //get our auth instance and export to the app.js
  export const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  //signInWithgoogle method which call the google auth provider 
  export const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      location.replace('/');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  export const signInWithEmail = (email,password) => {
    signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        //Signed In
        const user = userCredential.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }
  export const createNewUser = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed In
        const user = userCredential.user;
        console.log(user);
        return user;
      }).catch((error) => {
        const errorCode = error.code;
        const errormessage = error.message;
      }) 
  }
  

  export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = addDoc(collection(db,collectionKey));

    console.log(collectionRef);
  }
    