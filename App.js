import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './screens/OnBoarding';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import constants from './utils/constants';
import AuthStack from './utils/nav/AuthStack';
import AppStack from './utils/nav/AppStack';
import CardContextProvider from './utils/cardContextAPI';

export default function App() {
	const [isInitializing, setIsInitializing] = useState(true);

	const [fontsLoaded, fontError] = useFonts({
		inter: constants.FONT,
	});

	useEffect(() => {
		if (fontsLoaded) {
			setIsInitializing(false);
		}
	}, []);

	if (fontError) {
		return null;
	}

	return (
		<NavigationContainer>
			<CardContextProvider>
				<AuthStack />
			</CardContextProvider>
		</NavigationContainer>
	);
}
