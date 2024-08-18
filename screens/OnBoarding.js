import { StyleSheet, Text, View } from 'react-native';
import constants from '../utils/constants';
import ButtonUI from '../components/UI/ButtonUI';
import Ecllipse from '../components/UI/Ecllipse';
import FocusAwareStatusBar from '../components/UI/FocusAwareStatusBar';
import { useContext } from 'react';
import { AuthContext } from '../utils/authContext';
import { useTheme } from '@react-navigation/native';

const OnBoarding = () => {
	const { colors } = useTheme();
	const { signInUserHandler, isAuthenticating, authError } =
		useContext(AuthContext);

	return (
		<View
			style={[
				styles.outerContainer,
				{ backgroundColor: colors.onBoardingBG },
			]}
		>
			<FocusAwareStatusBar barStyle='dark-content' />
			<View style={styles.innerContainer}>
				<Ecllipse />
				<View style={styles.headingContainer}>
					<Text style={[styles.heading, { color: colors.dark }]}>
						Your loyalty made simple
					</Text>
					<Text style={[styles.subHeading, { color: colors.dark }]}>
						All your loyalty cards in one place, earn points and get
						special offers just for you.
					</Text>
				</View>
				<View style={styles.actionContainer}>
					<ButtonUI
						backgroundColor='#000'
						onPress={signInUserHandler}
						isloading={isAuthenticating}
						color='#fff'
					>
						Get started
					</ButtonUI>
					{authError && (
						<Text
							style={[styles.errorText, { color: colors.error }]}
						>
							{authError}!
						</Text>
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
