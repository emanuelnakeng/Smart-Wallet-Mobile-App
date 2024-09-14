import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import useCardStore from '../../store/card-store';

const SortItem = ({ sort }) => {
	const { colors } = useTheme();
	const sortCardsHandler = useCardStore(state => state.sortCardsHandler);
	const sortOrder = useCardStore(state => state.sortOrder);
	const toggleLoading = useCardStore(state => state.toggleLoading);

	return (
		<Pressable
			style={styles.container}
			onPress={() => {
				toggleLoading();
				sortCardsHandler(sort);
				toggleLoading();
			}}
		>
			<Text style={[styles.label, { color: colors.text }]}>{sort}</Text>
			<View style={styles.actionContainer}>
				<Ionicons
					name={
						sortOrder == sort
							? 'radio-button-on'
							: 'radio-button-off'
					}
					size={22}
					color={colors.primary}
				/>
			</View>
		</Pressable>
	);
};
export default SortItem;
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	label: {
		fontFamily: 'inter-semiBold',
		fontSize: 16.5,
	},
});
