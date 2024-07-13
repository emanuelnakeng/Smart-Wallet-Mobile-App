import {
	Animated,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import ScreenContainer from '../components/UI/ScreenContainer';
import AccountItem from '../components/Account/AccountItem';
import constants from '../utils/constants';

const Account = () => {
	const AnimatedHeaderValue = new Animated.Value(0);
	const headerMaxHeight = 60;
	const headerMinHeight = 50;

	const animHeaderHeight = AnimatedHeaderValue.interpolate({
		inputRange: [0, headerMaxHeight - headerMinHeight],
		outputRange: [headerMaxHeight, headerMinHeight],
		extrapolate: 'clamp',
	});

	return (
		<ScreenContainer screenTitle='Account' headerHeight={animHeaderHeight}>
			<ScrollView
				style={{ paddingTop: 10 }}
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
					<Text style={styles.sectionHeading}>Settings</Text>
					<AccountItem icon='log-out-outline' actionLabel='Logout' />
					<AccountItem
						icon='color-palette-outline'
						actionLabel='Theme'
					/>
					<AccountItem
						icon='swap-vertical-outline'
						actionLabel='Sort'
					/>
				</View>
				<View style={styles.accountSectionContainer}>
					<Text style={styles.sectionHeading}>Contact</Text>
					<AccountItem
						icon='mail-outline'
						actionLabel='Send Feedback'
					/>
					<AccountItem
						icon='thumbs-up-outline'
						actionLabel='Write a Review'
					/>
					<AccountItem
						icon='earth-outline'
						actionLabel='Our Website'
					/>
				</View>
				<View style={styles.accountSectionContainer}>
					<Text style={styles.sectionHeading}>Legal</Text>
					<AccountItem
						icon='document-text-outline'
						actionLabel='Terms of Use'
					/>
					<AccountItem
						icon='document-text-outline'
						actionLabel='Privacy Policy'
					/>
				</View>
				<View style={styles.versionSectionContainer}>
					<Text style={styles.version}>
						App Version{' '}
						<Text
							style={{
								fontWeight: '600',
								color: constants.ACCENT_COLOR,
							}}
						>
							1.0.0
						</Text>
					</Text>
				</View>
			</ScrollView>
		</ScreenContainer>
	);
};
export default Account;
const styles = StyleSheet.create({
	accountSectionContainer: {
		rowGap: 20,
		paddingBottom: 30,
	},
	sectionHeading: {
		color: constants.GRAY_COLOR,
		fontFamily: 'inter',
		lineHeight: 22,
		fontSize: 18.5,
		fontWeight: '600',
	},
	versionSectionContainer: {
		paddingVertical: 30,
	},
	version: {
		textAlign: 'right',
		fontFamily: 'inter',
		fontSize: 13,
		lineHeight: 18,
		color: constants.GRAY_COLOR,
		fontWeight: '500',
		paddingHorizontal: 20,
	},
});
