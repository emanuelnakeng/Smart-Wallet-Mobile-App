import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import OnBoarding from '../../screens/OnBoarding';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);

	// if (isFirstLaunch === null) {
	// 	return null;
	// }

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='onboarding' component={OnBoarding} />
			<Stack.Screen name='login' component={Login} />
		</Stack.Navigator>
	);
};
export default AuthStack;
