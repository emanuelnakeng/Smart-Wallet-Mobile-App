import { StatusBar, Text, View, StyleSheet, Image } from 'react-native';
import constants from '../utils/constants';
import LottieView from 'lottie-react-native';

const app = require('../app.json');

const Splash = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.topContainer}>
				<Image
					source={constants.SPLASH_ICON}
					style={styles.logoImage}
				/>
				<View style={styles.bottomContainer}>
					<Text style={styles.logo}>Weru</Text>
					<LottieView
						source={require('../assets/loading-animation-dark.json')}
						style={{ height: 60, width: 60 }}
						autoPlay
					/>
					<Text style={styles.credits}>{app.expo.version}</Text>
				</View>
			</View>
		</View>
	);
};
export default Splash;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: constants.SPLASH_BACKGROUNDCOLOR,
	},
	logo: {
		fontFamily: 'inter-semiBold',
		fontSize: 24.5,
		padding: 5,
		color: '#000',
	},
	logoImage: {
		height: 125,
		width: 125,
		resizeMode: 'contain',
	},
	topContainer: {
		height: constants.DEVICE_HEIGHT * 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	bottomContainer: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 50,
	},
	credits: {
		fontSize: 12.5,
		fontFamily: 'inter',
		color: '#333',
	},
});
