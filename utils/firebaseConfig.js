// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export { app, auth };
