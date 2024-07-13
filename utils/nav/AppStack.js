import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rewards from '../../screens/Rewards';
import Cards from '../../screens/Cards';
import Account from '../../screens/Account';
import { Ionicons } from '@expo/vector-icons';
import constants from '../constants';

const Tab = createBottomTabNavigator();

const AppStack = () => {
	return (
		<Tab.Navigator
			initialRouteName='cards'
			backBehavior='history'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, iconName }) => {
					if (route.name === 'Cards') {
						iconName = 'wallet-outline';
					} else if (route.name === 'Rewards') {
						iconName = 'gift-outline';
					} else if (route.name === 'Account') {
						iconName = 'person-outline';
					}
					return (
						<Ionicons
							name={iconName}
							size={28}
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
					rowGap: 3,
				},
				tabBarLabelStyle: {
					fontFamily: 'inter',
					fontSize: 11.5,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarAccessibilityLabel: 'Navigation bar',
				tabBarHideOnKeyboard: true,
				tabBarInactiveTintColor: constants.GRAY_COLOR,
				tabBarActiveTintColor: constants.ACCENT_COLOR,
				tabBarItemStyle: {
					paddingTop: 5,
				},
			})}
		>
			<Tab.Screen name='Cards' component={Cards} />
			<Tab.Screen name='Rewards' component={Rewards} />
			<Tab.Screen name='Account' component={Account} />
		</Tab.Navigator>
	);
};

export default AppStack;
