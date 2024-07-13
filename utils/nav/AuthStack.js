import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../../screens/OnBoarding';
import Login from '../../screens/Login';
import OTPConfirm from '../../screens/OTPConfirm';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);

	// if (isFirstLaunch === null) {
	// 	return null;
	// }

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='onBoarding' component={OnBoarding} />
			<Stack.Screen name='login' component={Login} />
			<Stack.Screen name='otp' component={OTPConfirm} />
		</Stack.Navigator>
	);
};
export default AuthStack;
