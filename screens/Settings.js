import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/UI/ScreenContainer';
import AccountItem from '../components/Account/AccountItem';
import constants from '../utils/constants';

const Settings = () => {
	const AnimatedHeaderValue = new Animated.Value(0);
	const headerMaxHeight = 60;
	const headerMinHeight = 50;

	const animHeaderHeight = AnimatedHeaderValue.interpolate({
		inputRange: [0, headerMaxHeight - headerMinHeight],
		outputRange: [headerMaxHeight, headerMinHeight],
		extrapolate: 'clamp',
	});

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
					<Text style={styles.sectionHeading}>Customize</Text>
					<AccountItem icon='swap-horizontal' actionLabel='Sort By' />
					<AccountItem icon='trash' actionLabel='Delete Cards' />
				</View>
				<View style={styles.accountSectionContainer}>
					<Text style={styles.sectionHeading}>Contact</Text>
					<AccountItem icon='thumbs-up' actionLabel='Review App' />
					<AccountItem icon='earth' actionLabel='Visit Website' />
					<AccountItem icon='mail' actionLabel='Send Feedback' />
				</View>
				<View style={styles.accountSectionContainer}>
					<Text style={styles.sectionHeading}>Support</Text>
					<AccountItem icon='help-buoy' actionLabel='Help' />
					<AccountItem
						icon='document-text'
						actionLabel='Terms of Service'
					/>
					<AccountItem
						icon='document-text'
						actionLabel='Privacy Policy'
					/>
				</View>
				<View style={styles.versionSectionContainer}>
					<Text style={styles.version}>
						Version{' '}
						<Text
							style={{
								fontFamily: 'inter-bold',
							}}
						>
							1.1.1
						</Text>
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
		paddingBottom: 40,
	},
	sectionHeading: {
		color: constants.GRAY_COLOR,
		fontFamily: 'inter-bold',
		lineHeight: 24,
		fontSize: 16.5,
	},
	versionSectionContainer: {
		alignItems: 'center',
	},
	version: {
		fontFamily: 'inter-semiBold',
		fontSize: 12.5,
		color: constants.BLACK_TRANSPARENT,
	},
});
