import { create } from 'zustand';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../utils/firebase/';
import { deleteAllCardsUser } from '../utils/http';

const initialStore = {
	isUser: '',
	isAuthError: false,
	isAuthenticating: false,
};

const useAuthStore = create(set => ({
	...initialStore,
	signInUser: async () => {
		set(state => ({ isAuthenticating: true }));
		const authResponse = await signInAnonymously(auth);
		if (authResponse.user) {
			set(state => ({
				isUser: authResponse.user.uid,
				isAuthenticating: false,
			}));
		} else {
			set(state => ({
				isUser: '',
				isAuthError: 'Login failed',
				isAuthenticating: false,
			}));
		}
	},
	setUserHandler: userId => set(state => ({ isUser: userId })),
	logoutUser: async userId => {
		set(state => ({ isAuthenticating: true }));
		await deleteAllCardsUser(userId);
		await auth.signOut();
		set(state => ({ isUser: '', isAuthenticating: false }));
	},
}));

export default useAuthStore;
