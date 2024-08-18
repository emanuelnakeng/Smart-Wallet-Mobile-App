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
import { useContext, useState } from 'react';
import { AppContext } from '../utils/appContext';
import { deleteAllCardsUser } from '../utils/http';
import { AuthContext } from '../utils/authContext';
import { auth } from '../utils/firebase';

const app = require('../app.json');

const Settings = () => {
	const { colors } = useTheme();
	const { setUserCards } = useContext(AppContext);
	const { isUser } = useContext(AuthContext);
	const [isVisible, setIsVisible] = useState(false);
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

	const closeModalHandler = () => {
		setIsVisible(false);
	};

	const resetAppHandler = async () => {
		Alert.alert(
			'Confirm Deletion',
			`Are you sure? This action cannot be undone.`,
			[
				{
					text: 'No',
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: async () => {
						await deleteAllCardsUser(isUser);
						await auth.signOut();
						setUserCards('');
					},
					style: 'destructive',
				},
			]
		);
	};

	return (
		<ScreenContainer screenTitle='Settings' headerHeight={animHeaderHeight}>
			<ScrollView
				style={{ paddingTop: 10, paddingHorizontal: 20 }}
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
						icon='lock-open'
						actionLabel='Permissions'
						onPress={() =>
							openLinkHandler('https://www.google.com')
						}
						//link to app permissions
					/>
					<AccountItem
						icon='trash-sharp'
						actionLabel='Clear Data'
						onPress={resetAppHandler}
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
						&copy; {currentYear}
					</Text>
				</View>
			</ScrollView>
		</ScreenContainer>
	);
};
export default Settings;
const styles = StyleSheet.create({
	accountSectionContainer: {
		rowGap: 25,
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
	},
	credits: {
		fontFamily: 'inter-semiBold',
		fontSize: 12.5,
	},
});
