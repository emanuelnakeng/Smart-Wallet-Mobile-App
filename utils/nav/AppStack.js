import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import CardStack from './CardStack';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppStack = () => {
	const { colors } = useTheme();

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
							color={focused ? colors.primary : colors.gray}
						/>
					);
				},
				tabBarStyle: {
					backgroundColor: colors.background,
					borderTopWidth: 0.5,
					borderTopColor: colors.border,
				},
				tabBarLabelStyle: {
					fontFamily: 'inter-semiBold',
					fontSize: 12,
				},
				headerShown: false,
				tabBarAccessibilityLabel: 'Navigation bar',
				tabBarHideOnKeyboard: true,
				tabBarInactiveTintColor: colors.gray,
				tabBarActiveTintColor: colors.primary,
			})}
		>
			<Tab.Screen name='Cards' component={CardStack} />
			<Tab.Screen name='Settings' component={Settings} />
		</Tab.Navigator>
	);
};

export default AppStack;
