import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import constants from '../utils/constants';
import ButtonUI from '../components/UI/ButtonUI';
import Ecllipse from '../components/UI/Ecllipse';
import FocusAwareStatusBar from '../components/UI/FocusAwareStatusBar';
import { useTheme } from '@react-navigation/native';
import useAuthStore from '../store/auth-store';

const OnBoarding = () => {
	const { colors } = useTheme();

	const { signInUser, isAuthenticating, isAuthError } = useAuthStore(
		state => ({
			signInUser: state.signInUser,
			isAuthenticating: state.isAuthenticating,
			isAuthError: state.isAuthError,
		})
	);

	return (
		<View
			style={[styles.container, { backgroundColor: colors.onBoardingBG }]}
		>
			<FocusAwareStatusBar barStyle='dark-content' />
			<SafeAreaView style={styles.container}>
				<Ecllipse />
				<View style={styles.innerContainer}>
					<View style={styles.headingContainer}>
						<Text style={[styles.heading, { color: colors.dark }]}>
							Your loyalty made simple
						</Text>
						<Text
							style={[styles.subHeading, { color: colors.dark }]}
						>
							All your loyalty cards in one place, earn points and
							get special offers just for you.
						</Text>
					</View>
					<View>
						<ButtonUI
							backgroundColor='#000'
							onPress={signInUser}
							isloading={isAuthenticating}
							color='#fff'
						>
							Get started
						</ButtonUI>
						{isAuthError && (
							<Text
								style={[
									styles.errorText,
									{ color: colors.error },
								]}
							>
								{isAuthError}!
							</Text>
						)}
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};
export default OnBoarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		rowGap: 20,
		paddingHorizontal: 20,
		justifyContent: 'center',
		flex: 1,
		marginTop: 40,
	},
	headingContainer: {
		rowGap: 20,
	},
	subHeading: {
		fontSize: 16,
		fontFamily: 'inter-regular',
		textAlign: 'center',
		lineHeight: 24,
	},
	heading: {
		fontSize: 38,
		lineHeight: 44,
		textAlign: 'center',
		textTransform: 'capitalize',
		fontFamily: 'inter-extraBold',
	},
	errorText: {
		fontFamily: 'inter-regular',
		textAlign: 'center',
		fontSize: 12.5,
	},
});
