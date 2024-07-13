import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import constants from '../../utils/constants';
const CardItem = ({ backgroundColor, logo }) => {
	return (
		<TouchableOpacity
			style={[styles.cardContainer, { backgroundColor }]}
			activeOpacity={0.85}
		>
			<Image
				source={logo}
				style={{ height: '70%', width: '70%', resizeMode: 'contain' }}
			/>
		</TouchableOpacity>
	);
};
export default CardItem;
const styles = StyleSheet.create({
	cardContainer: {
		width: (constants.DEVICE_WIDTH - 60) / 2,
		borderRadius: 10,
		height: constants.DEVICE_WIDTH / 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
