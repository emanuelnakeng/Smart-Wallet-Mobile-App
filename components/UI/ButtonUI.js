import { Pressable, StyleSheet, Text, View } from 'react-native';
import constants from '../../utils/constants';

const ButtonUI = ({ children, backgroundColor, onPress }) => {
	return (
		<Pressable
			style={[styles.buttonContainer, { backgroundColor }]}
			onPress={onPress}
		>
			<Text style={[styles.buttonLabel, {}]}>{children}</Text>
		</Pressable>
	);
};
export default ButtonUI;
const styles = StyleSheet.create({
	buttonContainer: {
		height: constants.DEVICE_HEIGHT * 0.08,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		width: constants.DEVICE_WIDTH - 40,
		alignSelf: 'center',
	},
	buttonLabel: {
		fontSize: 20,
		color: '#fff',
		fontWeight: '500',
		fontFamily: 'inter',
	},
});
