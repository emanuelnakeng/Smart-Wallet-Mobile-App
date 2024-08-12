import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

const LoadingLottie = ({ style }) => {
	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				{...style}
				source={require('../../assets/loading-animation.json')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	animationContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default LoadingLottie;
