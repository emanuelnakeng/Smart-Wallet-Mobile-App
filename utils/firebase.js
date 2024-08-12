import { initializeApp } from 'firebase/app';
import {
	getAuth,
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAsH5Bamre-tpzHeR-riyHueH8msnt2bYE',
	authDomain: 'smartwalletapp-4f1bd.firebaseapp.com',
	projectId: 'smartwalletapp-4f1bd',
	storageBucket: 'smartwalletapp-4f1bd.appspot.com',
	messagingSenderId: '364221428884',
	appId: '1:364221428884:web:e193021ab1d04eaf2cb081',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { db, auth };
