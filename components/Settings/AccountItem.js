import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const AccountItem = ({ icon, actionLabel, onPress, isLoading }) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			style={styles.itemContainer}
			activeOpacity={0.65}
			onPress={onPress}
		>
			<View style={styles.labelIconContainer}>
				<Ionicons name={icon} size={24} color={colors.primary} />
				<Text style={[styles.actionLabel, { color: colors.text }]}>
					{actionLabel}
				</Text>
			</View>
			<View>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<Ionicons
						name='chevron-forward-outline'
						size={22}
						color={colors.gray}
					/>
				)}
			</View>
		</TouchableOpacity>
	);
};
export default AccountItem;
const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 10,
	},
	labelIconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 15,
	},
	actionLabel: {
		fontFamily: 'inter-semiBold',
		fontSize: 16.5,
	},
	switchButtonStyle: {
		transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
	},
});
