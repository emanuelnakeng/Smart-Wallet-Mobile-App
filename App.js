import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import AuthStack from './utils/nav/AuthStack';
import AppStack from './utils/nav/AppStack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useColorScheme } from 'react-native';
import theme from './utils/theme';
import useAuthStore from './store/auth-store';

function Root() {
	const colorScheme = useColorScheme();
	const [isInitializing, setIsInitializing] = useState(true);
	const { isUser, setUserHandler } = useAuthStore(state => ({
		isUser: state.isUser,
		setUserHandler: state.setUserHandler,
	}));

	const [fontsLoaded] = useFonts({
		'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
		'inter-semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
		'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
		'inter-extraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
	});

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUserHandler(user.uid);
				setIsInitializing(false);
			} else {
				setUserHandler('');
				setIsInitializing(false);
			}
		});
	}, [fontsLoaded]);

	if (isInitializing) {
		return null;
	}

	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? theme.dark : theme.light}
		>
			{isUser ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
}

function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Root />
		</GestureHandlerRootView>
	);
}

export default App;
