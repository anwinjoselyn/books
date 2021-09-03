/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import { auth, db } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const authContext = createContext({ user: null });
const { Provider } = authContext;

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const createUser = async (user: any) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), user);
      console.log('Document written with ID: ', docRef.id);
      return docRef;
    } catch (e) {
      console.error('Error adding document: ', e);
      return { e };
    }
  };

  const signUp = ({ name, email, password }: any) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return createUser({ uid: user.uid, email, name });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorMessage };
      });
  };

  const getUserAdditionalData = async (user: any) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const foundUser = doc.data();
      if (foundUser.email === user.email) {
        setUser(foundUser);
      }
    });
    return;
  };

  const signIn = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        return getUserAdditionalData(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        return { errorMessage };
      });
  };

  const handleAuthStateChanged = (user: any) => {
    setUser(user);
    if (user) {
      getUserAdditionalData(user);
    }
  };

  const signOut = () => {
    return auth.signOut().then(() => setUser(false));
  };

  const sendPasswordResetMail = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then((response: any) => {
        return response;
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        return { errorMessage };
      });
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

    return () => unsub();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      getUserAdditionalData(user);
    }
  }, []);

  return {
    user,
    signUp,
    signIn,
    signOut,
    sendPasswordResetMail,
  };
};

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider();
  return <Provider value={auth}>{props.children}</Provider>;
}
export const useAuth: any = () => {
  return useContext(authContext);
};
