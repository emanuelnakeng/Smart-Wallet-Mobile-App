import {
	Animated,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Alert,
} from 'react-native';
import ScreenContainer from '../components/UI/ScreenContainer';
import AccountItem from '../components/Settings/AccountItem';
import * as WebBrowser from 'expo-web-browser';
import { useTheme } from '@react-navigation/native';
import useAuthStore from '../store/auth-store';
import useCardStore from '../store/card-store';
import { useState } from 'react';
import SortModal from '../components/Settings/SortModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const app = require('../app.json');

const Settings = () => {
	const { colors } = useTheme();
	const { logoutUser, isUser } = useAuthStore(state => ({
		logoutUser: state.logoutUser,
		isUser: state.isUser,
	}));
	const { clearCards, userCardsAsc, userCardsDesc, userCardsLastModified } =
		useCardStore(state => ({
			clearCards: state.clearCards,
		}));
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [isSortModal, setIsSortModal] = useState(false);

	const AnimatedHeaderValue = new Animated.Value(0);
	const headerMaxHeight = 60;
	const headerMinHeight = 50;

	const animHeaderHeight = AnimatedHeaderValue.interpolate({
		inputRange: [0, headerMaxHeight - headerMinHeight],
		outputRange: [headerMaxHeight, headerMinHeight],
		extrapolate: 'clamp',
	});
	const currentYear = new Date().getFullYear();

	const openLinkHandler = async link => {
		await WebBrowser.openBrowserAsync(link);
	};

	const resetAppHandler = () => {
		Alert.alert(
			'Confirm Clear',
			`Are you sure? This action will clear all card data.`,
			[
				{
					text: 'No',
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: async () => {
						setIsRefreshing(true);
						await logoutUser(isUser);
						clearCards();
						setIsRefreshing(false);
					},
					style: 'destructive',
				},
			]
		);
	};

	return (
		<ScreenContainer screenTitle='Settings' headerHeight={animHeaderHeight}>
			<ScrollView
				style={{
					paddingTop: 10,
					paddingHorizontal: 20,
				}}
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: { y: AnimatedHeaderValue },
							},
						},
					],
					{ useNativeDriver: false }
				)}
			>
				<View style={styles.accountSectionContainer}>
					<Text
						style={[styles.sectionHeading, { color: colors.gray }]}
					>
						Customize
					</Text>
					<AccountItem
						icon='swap-vertical'
						actionLabel='Sort by'
						onPress={() => setIsSortModal(true)}
					/>
					<AccountItem
						icon='trash-sharp'
						actionLabel='Clear All'
						onPress={resetAppHandler}
						isLoading={isRefreshing}
					/>
				</View>
				<View style={styles.accountSectionContainer}>
					<Text
						style={[styles.sectionHeading, { color: colors.gray }]}
					>
						Contact
					</Text>
					<AccountItem
						icon='thumbs-up'
						actionLabel='Review App'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
					/>
					<AccountItem
						icon='earth'
						actionLabel='Visit Website'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
					/>
					<AccountItem
						icon='mail'
						actionLabel='Send Feedback'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
					/>
				</View>
				<View style={styles.accountSectionContainer}>
					<Text
						style={[styles.sectionHeading, { color: colors.gray }]}
					>
						Support
					</Text>
					<AccountItem
						icon='help-buoy'
						actionLabel='Help'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
					/>
					<AccountItem
						icon='document-text'
						actionLabel='Terms of Service'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
					/>
					<AccountItem
						icon='document-text'
						actionLabel='Privacy Policy'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
					/>
				</View>
				<View style={styles.versionSectionContainer}>
					<Text style={[styles.credits, { color: colors.gray }]}>
						Version{' '}
						<Text
							style={{
								fontFamily: 'inter-extraBold',
							}}
						>
							{app.expo.version}
						</Text>
					</Text>
					<Text style={[styles.credits, { color: colors.gray }]}>
						&copy; Weru {currentYear}
					</Text>
				</View>
			</ScrollView>
			<SortModal
				isVisible={isSortModal}
				onCloseModal={() => setIsSortModal(false)}
			/>
		</ScreenContainer>
	);
};
export default Settings;
const styles = StyleSheet.create({
	accountSectionContainer: {
		rowGap: 30,
		paddingBottom: 30,
	},
	sectionHeading: {
		fontFamily: 'inter-bold',
		lineHeight: 24,
		fontSize: 16.5,
	},
	versionSectionContainer: {
		alignItems: 'center',
		rowGap: 10,
		paddingBottom: 40,
	},
	credits: {
		fontFamily: 'inter-semiBold',
		fontSize: 12.5,
	},
});
