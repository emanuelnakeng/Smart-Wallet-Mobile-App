import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import constants from '../../utils/constants';
import LoadingLottie from './LoadingLottie';
import { useTheme } from '@react-navigation/native';

const ButtonUI = ({
	children,
	backgroundColor,
	onPress,
	width,
	color,
	isloading,
}) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			style={[
				styles.buttonContainer,
				{
					backgroundColor: backgroundColor || colors.buttonBG,
					width: width || constants.DEVICE_WIDTH - 40,
				},
			]}
			onPress={onPress}
			activeOpacity={0.8}
		>
			{isloading ? (
				<LoadingLottie style={{ width: 55, height: 55 }} />
			) : (
				<Text style={[styles.buttonLabel, { color }]}>{children}</Text>
			)}
		</TouchableOpacity>
	);
};
export default ButtonUI;
const styles = StyleSheet.create({
	buttonContainer: {
		height: constants.DEVICE_WIDTH * 0.14,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	buttonLabel: {
		fontSize: 20,
		fontFamily: 'inter-semiBold',
	},
});
