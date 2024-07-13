import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
const LoadingLottie = () => {
	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				style={{
					width: 120,
					height: 120,
				}}
				source={require('../../assets/loading-animation.json')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	animationContainer: {
		flex: 1,
		alignItems: 'center',
	},
});
export default LoadingLottie;
