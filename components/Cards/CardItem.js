import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import constants from '../../utils/constants';
import Animated, {
	useAnimatedStyle,
	interpolate,
	withTiming,
} from 'react-native-reanimated';
import {
	Directions,
	FlingGestureHandler,
	State,
} from 'react-native-gesture-handler';

const LOGO_SIZE = constants.DEVICE_WIDTH * 0.25;
const CARD_WIDTH = constants.DEVICE_WIDTH - 40;
const CARD_HEIGHT = constants.DEVICE_WIDTH * 0.55;

const CardItem = ({
	card,
	index,
	animatedValue,
	currentIndex,
	prevIndex,
	cardsLength,
	maxVisibleCards,
	navigation,
}) => {
	const animatedStyle = useAnimatedStyle(() => {
		const translateY = interpolate(
			animatedValue.value,
			[index - 1, index, index + 1],
			[-30, 1, 30]
		);
		const translateY2 = interpolate(
			animatedValue.value,
			[index - 1, index, index + 1],
			[-200, 1, 200]
		);
		const scale = interpolate(
			animatedValue.value,
			[index - 1, index, index + 1],
			[0.9, 1, 1.1]
		);
		const opacity = interpolate(
			animatedValue.value,
			[index - 1, index, index + 1],
			[1, 1, 0]
		);
		return {
			transform: [
				{
					translateY:
						index === prevIndex.value ? translateY2 : translateY,
				},
				{ scale },
			],
			opacity:
				index < currentIndex.value + maxVisibleCards - 1
					? opacity
					: index === currentIndex.value + maxVisibleCards - 1
					? withTiming(1)
					: withTiming(0),
		};
	});
	return (
		<FlingGestureHandler
			key={'up'}
			direction={Directions.UP}
			onHandlerStateChange={ev => {
				if (ev.nativeEvent.state === State.END) {
					if (currentIndex.value !== 0) {
						animatedValue.value = withTiming(
							(currentIndex.value -= 1)
						);
						prevIndex.value = currentIndex.value - 1;
					}
				}
			}}
		>
			<FlingGestureHandler
				key={'down'}
				direction={Directions.DOWN}
				onHandlerStateChange={ev => {
					if (ev.nativeEvent.state === State.END) {
						if (currentIndex.value !== cardsLength - 1) {
							animatedValue.value = withTiming(
								(currentIndex.value += 1)
							);
							prevIndex.value = currentIndex.value;
						}
					}
				}}
			>
				<Animated.View
					style={[
						styles.container,
						{
							zIndex: cardsLength - index,
						},
						animatedStyle,
					]}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate('details', card)}
						activeOpacity={0.98}
						style={[
							styles.cardContainer,
							{ backgroundColor: card.cardColor },
						]}
					>
						<Image
							source={card.cardLogo}
							style={styles.logo}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				</Animated.View>
			</FlingGestureHandler>
		</FlingGestureHandler>
	);
};
export default CardItem;
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
	},
	cardContainer: {
		flex: 1,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
	},
	logo: {
		width: LOGO_SIZE,
		height: LOGO_SIZE,
	},
	title: {
		fontFamily: 'inter-ExtraBold',
		color: constants.BACKGROUND_COLOR,
		fontSize: 20,
		textTransform: 'uppercase',
		textAlign: 'center',
		lineHeight: 40,
	},
});
