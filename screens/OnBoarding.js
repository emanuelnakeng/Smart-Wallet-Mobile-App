import { StyleSheet, Text, View } from 'react-native';
import constants from '../utils/constants';
import ButtonUI from '../components/UI/ButtonUI';
import Ecllipse from '../components/UI/Ecllipse';
import FocusAwareStatusBar from '../components/UI/StatusAwareBar';

const OnBoarding = ({ navigation }) => {
	return (
		<View style={styles.container}>
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
						backgroundColor={constants.BLACK_COLOR}
						onPress={() => navigation.navigate('login')}
					>
						Get started
					</ButtonUI>
				</View>
			</View>
		</View>
	);
};
export default OnBoarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F1E2C6',
	},
	innerContainer: {
		flex: 1,
		marginTop: constants.DEVICE_HEIGHT * 0.1,
	},
	headingContainer: {
		paddingHorizontal: 20,
		rowGap: 10,
		marginTop: constants.DEVICE_HEIGHT * 0.15,
	},
	actionContainer: {
		width: '100%',
		paddingVertical: 30,
	},
	subHeading: {
		fontSize: 16,
		fontFamily: 'inter',
		fontWeight: '500',
		textAlign: 'center',
		color: constants.BLACK_TRANSPARENT,
		lineHeight: 26,
	},
	heading: {
		fontSize: 38,
		lineHeight: 48,
		fontWeight: '800',
		color: constants.BLACK_COLOR,
		textAlign: 'center',
		textTransform: 'capitalize',
		fontFamily: 'inter',
	},
});
