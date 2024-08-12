import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import constants from '../../utils/constants';

const IMAGE_SIZE = constants.DEVICE_WIDTH * 0.07;
const CARD_WIDTH = constants.DEVICE_WIDTH * 0.16;
const CARD_HEIGHT = constants.DEVICE_WIDTH * 0.1;

const CardSelectionItem = ({ item, index, onCardSelection }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onCardSelection(item)}
			activeOpacity={0.9}
			key={index}
		>
			<View
				style={[
					styles.cardPreview,
					{ backgroundColor: item.cardColor },
				]}
			>
				<Image
					source={item.cardLogo}
					style={styles.logo}
					resizeMode='contain'
				/>
			</View>
			<View style={styles.cardNameContainer}>
				<Text style={styles.cardName}>{item.cardName}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CardSelectionItem;

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
	},
	cardPreview: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardName: {
		fontSize: 17,
		fontFamily: 'inter-semiBold',
		color: constants.BLACK_TRANSPARENT,
	},
	logo: {
		width: IMAGE_SIZE,
		height: IMAGE_SIZE,
		borderRadius: 100,
	},
	cardNameContainer: {
		justifyContent: 'center',
		height: CARD_HEIGHT,
	},
});
