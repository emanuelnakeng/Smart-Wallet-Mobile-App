import { StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import constants from '../../utils/constants';

const Header = ({ headerTitle, onPressIcon, hasActionIcon, height }) => {
	return (
		<Animated.View style={[styles.headerContainer, { height }]}>
			<Text style={styles.screenTitle}>{headerTitle}</Text>
			{hasActionIcon && (
				<TouchableOpacity onPress={onPressIcon} activeOpacity={0.8}>
					<AntDesign
						name='pluscircle'
						size={36}
						color={constants.ACCENT_COLOR}
					/>
				</TouchableOpacity>
			)}
		</Animated.View>
	);
};
export default Header;
const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingHorizontal: 20,
	},
	screenTitle: {
		fontFamily: 'inter-extraBold',
		fontSize: 26,
		lineHeight: 40,
		color: constants.BLACK_COLOR,
	},
});
