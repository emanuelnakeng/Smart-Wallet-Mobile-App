import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useContext, useEffect, useState } from 'react';
import AuthStack from './utils/nav/AuthStack';
import AppStack from './utils/nav/AppStack';
import AppContextProvider from './utils/appContext';
import * as SplashScreen from 'expo-splash-screen';
import AuthContextProvider, { AuthContext } from './utils/authContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useColorScheme } from 'react-native';
import theme from './utils/theme';

function Root() {
	const { isUser, setIsUser } = useContext(AuthContext);
	const [isInitializing, setIsInitialising] = useState(true);
	const colorScheme = useColorScheme();

	const [fontsLoaded] = useFonts({
		'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
		'inter-semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
		'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
		'inter-extraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
	});

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			SplashScreen.hideAsync();
			if (user) {
				setIsUser(user.uid);
				setIsInitialising(false);
			} else {
				setIsUser('');
				setIsInitialising(false);
			}
		});
	}, [fontsLoaded]);

	if (isInitializing) {
		SplashScreen.preventAutoHideAsync();
	}

	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? theme.dark : theme.light}
		>
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
			<AuthContextProvider>
				<Root />
			</AuthContextProvider>
		</GestureHandlerRootView>
	);
}

export default App;
