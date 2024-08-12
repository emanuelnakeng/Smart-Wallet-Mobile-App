import { StyleSheet, Text, View } from 'react-native';
import constants from '../utils/constants';
import ButtonUI from '../components/UI/ButtonUI';
import Ecllipse from '../components/UI/Ecllipse';
import FocusAwareStatusBar from '../components/UI/StatusAwareBar';
import { useContext } from 'react';
import { AuthContext } from '../utils/authContext';

const OnBoarding = ({ navigation }) => {
	const { signInUserHandler, isAuthenticating, authError } =
		useContext(AuthContext);

	return (
		<View style={styles.outerContainer}>
			<FocusAwareStatusBar barStyle='dark-content' />
			<View style={styles.innerContainer}>
				<Ecllipse />
				<View style={styles.headingContainer}>
					<Text style={styles.heading}>Your loyalty made simple</Text>
					<Text style={styles.subHeading}>
						All your loyalty cards in one place, earn points and get
						special offers just for you.
					</Text>
				</View>
				<View style={styles.actionContainer}>
					<ButtonUI
						backgroundColor={'#000'}
						onPress={signInUserHandler}
						isloading={isAuthenticating}
					>
						Get started
					</ButtonUI>
					{authError && (
						<Text style={styles.errorText}>{authError}!</Text>
					)}
				</View>
			</View>
		</View>
	);
};
export default OnBoarding;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: '#E0B6EE',
	},
	innerContainer: {
		flex: 1,
		marginTop: constants.DEVICE_HEIGHT * 0.1,
	},
	headingContainer: {
		paddingHorizontal: 20,
		rowGap: 15,
		marginTop: constants.DEVICE_HEIGHT * 0.15,
	},
	actionContainer: {
		width: '100%',
		paddingVertical: 40,
		rowGap: 20,
	},
	subHeading: {
		fontSize: 16,
		fontFamily: 'inter-regular',
		textAlign: 'center',
		color: constants.BLACK_TRANSPARENT,
		lineHeight: 24,
	},
	heading: {
		fontSize: 38,
		lineHeight: 44,
		color: constants.BLACK_COLOR,
		textAlign: 'center',
		textTransform: 'capitalize',
		fontFamily: 'inter-extraBold',
	},
	errorText: {
		color: 'red',
		fontFamily: 'inter-regular',
		textAlign: 'center',
		fontSize: 12.5,
	},
});
