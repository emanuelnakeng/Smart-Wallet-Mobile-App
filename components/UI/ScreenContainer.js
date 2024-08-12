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
import { AntDesign } from '@expo/vector-icons';

const ScreenContainer = ({
	children,
	screenTitle,
	hasActionIcon,
	headerHeight,
	onPressIcon,
}) => {
	return (
		<View style={styles.screenContainer}>
			<FocusAwareStatusBar barStyle='dark-content' />
			<SafeAreaView style={{ flex: 1 }}>
				<Animated.View
					style={[styles.headerContainer, { height: headerHeight }]}
				>
					<Text style={styles.screenTitle}>{screenTitle}</Text>
					{hasActionIcon && (
						<TouchableOpacity onPress={onPressIcon}>
							<AntDesign
								name='pluscircle'
								size={36}
								color={constants.ACCENT_COLOR}
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
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingHorizontal: 20,
	},
	screenTitle: {
		fontFamily: 'inter-extraBold',
		fontSize: 28,
		lineHeight: 40,
		color: constants.BLACK_TRANSPARENT,
	},
});
