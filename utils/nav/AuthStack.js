import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../../screens/OnBoarding';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);

	// if (isFirstLaunch === null) {
	// 	return null;
	// }

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='OnBoarding' component={OnBoarding} />
		</Stack.Navigator>
	);
};
export default AuthStack;
