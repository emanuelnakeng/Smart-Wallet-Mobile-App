import { createContext, useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from './firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [authError, setAuthError] = useState('');
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const [isUser, setIsUser] = useState('');

	const signInUserHandler = async () => {
		setIsAuthenticating(true);
		try {
			await signInAnonymously(auth);
			setIsAuthenticating(false);
		} catch (error) {
			setAuthError('Authentication failed');
			setIsAuthenticating(false);
		}
	};
	return (
		<AuthContext.Provider
			value={{
				signInUserHandler,
				isUser,
				setIsUser,
				authError,
				isAuthenticating,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
