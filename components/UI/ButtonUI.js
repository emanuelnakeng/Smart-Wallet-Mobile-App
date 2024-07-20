import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import constants from '../../utils/constants';

const ButtonUI = ({ children, backgroundColor, onPress, width, color }) => {
	return (
		<TouchableOpacity
			style={[
				styles.buttonContainer,
				{
					backgroundColor,
					width: width || constants.DEVICE_WIDTH - 40,
				},
			]}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<Text style={[styles.buttonLabel, { color: color || '#fff' }]}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
export default ButtonUI;
const styles = StyleSheet.create({
	buttonContainer: {
		height: constants.DEVICE_WIDTH * 0.14,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	buttonLabel: {
		fontSize: 20,
		fontWeight: '600',
		fontFamily: 'inter',
	},
});
