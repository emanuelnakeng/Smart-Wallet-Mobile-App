import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cards from '../../screens/Cards';
import Settings from '../../screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import constants from '../constants';
import CardStack from './CardStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
	return (
		<Tab.Navigator
			initialRouteName='Cards'
			backBehavior='history'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, iconName }) => {
					if (route.name === 'Cards') {
						iconName = focused ? 'wallet' : 'wallet-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'settings' : 'settings-outline';
					}
					return (
						<Ionicons
							name={iconName}
							size={24}
							color={
								focused
									? constants.ACCENT_COLOR
									: constants.GRAY_COLOR
							}
						/>
					);
				},
				tabBarStyle: {
					backgroundColor: '#fff',
					borderTopWidth: 0.8,
					borderTopColor: '#f6f6f6',
				},
				tabBarLabelStyle: {
					fontFamily: 'inter-semiBold',
					fontSize: 12,
				},
				headerShown: false,
				tabBarAccessibilityLabel: 'Navigation bar',
				tabBarHideOnKeyboard: true,
				tabBarInactiveTintColor: constants.GRAY_COLOR,
				tabBarActiveTintColor: constants.ACCENT_COLOR,
			})}
		>
			<Tab.Screen name='Cards' component={CardStack} />
			<Tab.Screen name='Settings' component={Settings} />
		</Tab.Navigator>
	);
};

export default AppStack;
