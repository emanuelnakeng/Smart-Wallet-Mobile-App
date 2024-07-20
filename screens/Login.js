import {
	Pressable,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
	Keyboard,
	KeyboardAvoidingView,
} from 'react-native';
import constants from '../utils/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonUI from '../components/UI/ButtonUI';
import FocusAwareStatusBar from '../components/UI/StatusAwareBar';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
	//Enable color scheme detection

	return (
		<View style={styles.outerContainer}>
			<FocusAwareStatusBar barStyle='dark-content' />
			<SafeAreaView style={styles.innerContainer}>
				<Pressable
					style={styles.navigationContainer}
					onPress={() => navigation.goBack()}
				>
					<Ionicons
						name='arrow-back'
						size={28}
						color={constants.BLACK_COLOR}
					/>
				</Pressable>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<KeyboardAvoidingView style={styles.mainContentContainer}>
						<Text style={styles.headingText}>Login</Text>
						<Text style={styles.subHeading}>
							We will send you a{' '}
							<Text
								style={[
									styles.boldAltText,
									{
										color: 'rgba(0, 0, 0, 0.75)',
										textDecorationLine: 'none',
									},
								]}
							>
								One Time Password
							</Text>{' '}
							to this phone number.
						</Text>
						<ButtonUI
							backgroundColor={'#000'}
							onPress={() => navigation.navigate('otp')}
						>
							Send OTP
						</ButtonUI>
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
				<View style={styles.footerContainer}>
					<Text style={styles.footerText}>
						By continuing, you agree to our{' '}
						<Text style={styles.boldAltText}>Terms of Service</Text>{' '}
						and
						<Text style={styles.boldAltText}> Privacy Policy.</Text>
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};
export default Login;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: constants.BACKGROUND_COLOR,
		paddingHorizontal: 20,
	},
	innerContainer: {
		flex: 1,
	},
	navigationContainer: {
		marginTop: constants.DEVICE_WIDTH * 0.05,
		alignSelf: 'baseline',
		justifyContent: 'center',
	},
	mainContentContainer: {
		gap: 10,
		flex: 1,
		alignContent: 'center',
		// marginTop: constants.DEVICE_HEIGHT * 0.1,
	},
	headingText: {
		fontSize: 28,
		fontWeight: '700',
		textAlign: 'center',
		fontFamily: 'inter',
		color: '#000',
		lineHeight: 36,
	},
	subHeading: {
		fontSize: 16,
		fontFamily: 'inter',
		fontWeight: '400',
		textAlign: 'center',
		color: 'rgba(0, 0, 0, 0.75)',
		lineHeight: 26,
	},
	boldAltText: {
		fontWeight: '600',
		color: constants.ACCENT_COLOR,
		textDecorationLine: 'underline',
	},
	footerText: {
		fontSize: 13,
		textAlign: 'center',
		lineHeight: 20,
		color: constants.GRAY_COLOR,
	},
	footerContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		paddingVertical: 15,
	},
});
