import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Animated,
} from 'react-native';
import FocusAwareStatusBar from './StatusAwareBar';
import constants from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';
import { CardContext } from '../../utils/cardContextAPI';
import { useContext } from 'react';

const ScreenContainer = ({
	children,
	screenTitle,
	hasActionIcon,
	headerHeight,
}) => {
	const { modalOpenHandler } = useContext(CardContext);

	return (
		<View style={styles.screenContainer}>
			<FocusAwareStatusBar barStyle='dark-content' />
			<SafeAreaView style={{ flex: 1 }}>
				<Animated.View
					style={[styles.headerContainer, { height: headerHeight }]}
				>
					<Text style={styles.screenTitle}>{screenTitle}</Text>
					{hasActionIcon && (
						<TouchableOpacity onPress={modalOpenHandler}>
							<Ionicons
								name='add-circle-outline'
								size={38}
								color={constants.BLACK_COLOR}
							/>
						</TouchableOpacity>
					)}
				</Animated.View>
				<View style={styles.mainContentContainer}>{children}</View>
			</SafeAreaView>
		</View>
	);
};
export default ScreenContainer;
const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: constants.BACKGROUND_COLOR,
	},
	mainContentContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingHorizontal: 20,
	},
	screenTitle: {
		fontFamily: 'inter',
		fontSize: 24,
		lineHeight: 40,
		fontWeight: '700',
		color: constants.BLACK_COLOR,
	},
});
