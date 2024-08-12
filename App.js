import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useContext, useEffect, useState } from 'react';
import AuthStack from './utils/nav/AuthStack';
import AppStack from './utils/nav/AppStack';
import AppContextProvider, { AppContext } from './utils/appContext';
import * as SplashScreen from 'expo-splash-screen';
import AuthContextProvider, { AuthContext } from './utils/authContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import ThemeContextProvider, { ThemeContext } from './utils/themeContext';
import { Appearance } from 'react-native';

function Root() {
	const { isUser, setIsUser } = useContext(AuthContext);
	const [isInitializing, setIsInitialising] = useState(true);
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
	const colorScheme = Appearance.getColorScheme();

	const [fontsLoaded] = useFonts({
		'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
		'inter-semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
		'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
		'inter-extraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
	});

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			user ? setIsUser(user.uid) : setIsUser('');
			SplashScreen.hideAsync();
			setIsInitialising(false);
		});
	}, [fontsLoaded]);

	useEffect(() => {
		// setIsDark(colorScheme === 'dark' ? true : false);
	}, [currentTheme]);

	if (isInitializing) {
		SplashScreen.preventAutoHideAsync();
	}

	return (
		<NavigationContainer>
			{isUser ? (
				<AppContextProvider>
					<AppStack />
				</AppContextProvider>
			) : (
				<AuthStack />
			)}
		</NavigationContainer>
	);
}

function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeContextProvider>
				<AuthContextProvider>
					<Root />
				</AuthContextProvider>
			</ThemeContextProvider>
		</GestureHandlerRootView>
	);
}

export default App;
