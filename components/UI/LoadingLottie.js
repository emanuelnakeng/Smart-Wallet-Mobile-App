import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
const LoadingLottie = props => {
	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				style={props.style}
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
