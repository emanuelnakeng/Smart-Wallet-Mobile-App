import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import constants from '../../utils/constants';

const AccountItem = ({ icon, actionLabel }) => {
	return (
		<TouchableOpacity style={styles.itemContainer} activeOpacity={0.65}>
			<View style={styles.labelIconContainer}>
				<Ionicons
					name={icon}
					size={28}
					color={constants.ACCENT_COLOR}
				/>
				<Text style={styles.actionLabel}>{actionLabel}</Text>
			</View>
			<View>
				<Ionicons
					name='chevron-forward'
					size={28}
					color={constants.GRAY_COLOR}
				/>
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
		columnGap: 20,
	},
	actionLabel: {
		fontFamily: 'inter',
		fontSize: 16.5,
		fontWeight: '600',
		lineHeight: 28,
		color: constants.BLACK_TRANSPARENT,
	},
});
