import { StyleSheet, View, Text } from 'react-native';
import CardItem from './CardItem';
import { useSharedValue } from 'react-native-reanimated';
import constants from '../../utils/constants';
const CardsList = ({ data, maxVisibleCards, navigation }) => {
	const animatedValue = useSharedValue(0);
	const currentIndex = useSharedValue(0);
	const prevIndex = useSharedValue(0);

	if (data.length === 0) {
		return (
			<View style={styles.noResultContainer}>
				<Text style={styles.noResultText}>
					No cards yet, tab
					<Text
						style={{
							color: constants.ACCENT_COLOR,
							fontFamily: 'inter-semiBold',
						}}
					>
						{' '}
						+
					</Text>{' '}
					to get started
				</Text>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			{data.map((item, index) => {
				return (
					<CardItem
						key={item.cardId}
						card={item}
						index={index}
						animatedValue={animatedValue}
						currentIndex={currentIndex}
						prevIndex={prevIndex}
						cardsLength={data.length}
						maxVisibleCards={maxVisibleCards}
						navigation={navigation}
					/>
				);
			})}
		</View>
	);
};
export default CardsList;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: constants.DEVICE_WIDTH * 0.25,
	},
	noResultContainer: { flex: 1, marginTop: 20, paddingHorizontal: 20 },
	noResultText: {
		fontFamily: 'inter-regular',
		fontSize: 16,
		color: constants.GRAY_COLOR,
	},
});
