import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Animated,
} from 'react-native';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const ScreenContainer = ({
	children,
	screenTitle,
	hasActionIcon,
	headerHeight,
	onPressIcon,
}) => {
	const theme = useTheme();

	return (
		<View
			style={[
				styles.screenContainer,
				{ backgroundColor: theme.colors.background },
			]}
		>
			<FocusAwareStatusBar
				barStyle={theme.dark ? 'light-content' : 'dark-content'}
			/>
			<SafeAreaView style={{ flex: 1 }}>
				<Animated.View
					style={[styles.headerContainer, { height: headerHeight }]}
				>
					<Text
						style={[
							styles.screenTitle,
							{ color: theme.colors.text },
						]}
					>
						{screenTitle}
					</Text>
					{hasActionIcon && (
						<TouchableOpacity onPress={onPressIcon}>
							<AntDesign
								name='pluscircle'
								size={36}
								color={theme.colors.primary}
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
	},
});
