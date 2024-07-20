import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useContext, useEffect } from 'react';
import constants from './utils/constants';
import AuthStack from './utils/nav/AuthStack';
import AppStack from './utils/nav/AppStack';
import CardContextProvider from './utils/cardContextAPI';
import AuthContextProvider, { AuthContext } from './utils/authContextAPI';
import { useColorScheme } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebaseConfig';

function Root() {
	const { isUser, setIsUser } = useContext(AuthContext);
	const colorScheme = useColorScheme();
	const [fontsLoaded, fontError] = useFonts({
		inter: constants.FONT,
	});

	useEffect(() => {
		// onAuthStateChanged(auth, user => {
		// 	if (user) {
		// 		setIsUser(user.uid);
		// 	}
		// });
	}, []);

	if (fontsLoaded) {
		return (
			<NavigationContainer
				theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
			>
				{isUser ? (
					<CardContextProvider>
						<AppStack />
					</CardContextProvider>
				) : (
					<AuthStack />
				)}
			</NavigationContainer>
		);
	}
}

function App() {
	return (
		<AuthContextProvider>
			<Root />
		</AuthContextProvider>
	);
}

export default App;
