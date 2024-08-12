import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cards from '../../screens/Cards';
import CardDetails from '../../components/Cards/CardDetails';

const Stack = createNativeStackNavigator();

const CardStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='cards'
			backBehavior='history'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='cards' component={Cards} />
			<Stack.Screen name='details' component={CardDetails} />
		</Stack.Navigator>
	);
};

export default CardStack;