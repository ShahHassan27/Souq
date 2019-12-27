import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0W3p967roreATDmDKfPdArjDc0QigPn0",
    authDomain: "souq-db.firebaseapp.com",
    databaseURL: "https://souq-db.firebaseio.com",
    projectId: "souq-db",
    storageBucket: "souq-db.appspot.com",
    messagingSenderId: "347211216417",
    appId: "1:347211216417:web:5468c309b380395c241560",
    measurementId: "G-VZT8PPTC1H"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
