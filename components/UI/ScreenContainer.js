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
import { useEffect } from 'react';

const ScreenContainer = ({
	children,
	screenTitle,
	hasActionIcon,
	headerHeight,
	onPressIcon,
}) => {
	const theme = useTheme();
	const fadeAnimation = new Animated.Value(0);

	useEffect(() => {
		Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}, []);

	return (
		<Animated.View
			style={[
				styles.screenContainer,
				{
					backgroundColor: theme.colors.background,
					opacity: fadeAnimation,
				},
			]}
			entering
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
								size={32}
								color={theme.colors.primary}
							/>
						</TouchableOpacity>
					)}
				</Animated.View>
				<View style={styles.mainContentContainer}>{children}</View>
			</SafeAreaView>
		</Animated.View>
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
