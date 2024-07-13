import {
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import FocusAwareStatusBar from '../components/UI/StatusAwareBar';
import constants from '../utils/constants';
import OtpTextInput from 'react-native-text-input-otp';
import { useState } from 'react';
import ButtonUI from '../components/UI/ButtonUI';

const OTPConfirm = () => {
	const [otp, setOtp] = useState('');
	return (
		<View style={styles.outerContainer}>
			<FocusAwareStatusBar barStyle='dark-content' />
			<SafeAreaView>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View style={styles.mainContentContainer}>
						<Text style={styles.headingText}>
							Verify Phone Number
						</Text>
						<Text style={styles.subHeading}>
							We sent{' '}
							<Text
								style={[
									styles.boldAltText,
									{
										color: 'rgba(0, 0, 0, 0.75)',
										textDecorationLine: 'none',
									},
								]}
							>
								OTP
							</Text>{' '}
							to +264543221451 enter the code below.
						</Text>
						<OtpTextInput
							otp={otp}
							setOtp={setOtp}
							digits={4}
							style={styles.optField}
							focusedStyle={{
								borderColor: constants.ACCENT_COLOR,
							}}
							fontStyle={{
								fontSize: 20,
								fontWeight: '500',
								fontFamily: 'inter',
							}}
						/>
						<ButtonUI backgroundColor={'#000'}>Verify OTP</ButtonUI>
					</View>
				</TouchableWithoutFeedback>
			</SafeAreaView>
		</View>
	);
};
export default OTPConfirm;
const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: constants.BACKGROUND_COLOR,
		flex: 1,
		paddingHorizontal: 20,
	},
	headingText: {
		fontSize: 28,
		fontWeight: '700',
		textAlign: 'center',
		fontFamily: 'inter',
		color: '#000',
		lineHeight: 36,
	},
	mainContentContainer: {
		gap: 10,
		alignContent: 'center',
		marginTop: constants.DEVICE_HEIGHT * 0.2,
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
	optField: {
		borderRadius: 10,
		paddingVertical: constants.DEVICE_HEIGHT * 0.025,
		borderWidth: 0.55,
		borderColor: constants.GRAY_COLOR,
		marginVertical: 20,
	},
});
