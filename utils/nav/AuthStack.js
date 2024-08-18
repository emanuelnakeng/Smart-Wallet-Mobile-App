import OnBoarding from '../../screens/OnBoarding';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='OnBoarding' component={OnBoarding} />
		</Stack.Navigator>
	);
};
export default AuthStack;
