import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import constants from '../../utils/constants';
import { useTheme } from '@react-navigation/native';

const IMAGE_SIZE = constants.DEVICE_WIDTH * 0.07;
const CARD_WIDTH = constants.DEVICE_WIDTH * 0.16;
const CARD_HEIGHT = constants.DEVICE_WIDTH * 0.1;

const CardsOptionItem = ({ item, onCardSelection }) => {
	const { colors } = useTheme();
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onCardSelection(item)}
			activeOpacity={0.9}
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
				<Text style={[styles.cardName, { color: colors.text }]}>
					{item.cardName}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CardsOptionItem;

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		flex: 1,
	},
	cardPreview: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardName: {
		fontSize: 17.5,
		fontFamily: 'inter-semiBold',
		lineHeight: 20,
	},
	logo: {
		width: IMAGE_SIZE,
		height: IMAGE_SIZE,
	},
	cardNameContainer: {
		justifyContent: 'center',
		height: CARD_HEIGHT,
		flex: 1,
	},
});
