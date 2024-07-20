import { createContext, useState } from 'react';
import { auth } from './firebaseConfig';
import { signInAnonymously } from 'firebase/auth';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isUser, setIsUser] = useState('');
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	const login = async () => {
		try {
			setIsAuthenticating(true);
			await signInAnonymously(auth);
			setIsAuthenticating(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{ isUser, setIsUser, login, isAuthenticating }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
