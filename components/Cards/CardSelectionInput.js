import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import constants from '../../utils/constants';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CardContext } from '../../utils/cardContextAPI';

const IMAGE_SIZE = constants.DEVICE_WIDTH * 0.12;

const CardSelectionInput = () => {
	const {
		cardsData,
		searchChangeHandler,
		query,
		resetSearch,
		selectCardHandler,
	} = useContext(CardContext);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Search card'
					placeholderTextColor={constants.GRAY_COLOR}
					autoCapitalize='none'
					autoCorrect={false}
					value={query.value}
					style={styles.inputField}
					onChangeText={searchChangeHandler}
				/>
				<Pressable style={styles.clearButton} onPress={resetSearch}>
					<Ionicons
						name='close-circle-outline'
						size={24}
						color={constants.GRAY_COLOR}
					/>
				</Pressable>
			</View>
			<FlatList
				data={cardsData}
				keyboardDismissMode
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.company}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							style={styles.cardItem}
							onPress={() => selectCardHandler(item)}
							activeOpacity={0.9}
							key={item => item.company}
						>
							<Image
								source={require('../../assets/logo/Group.png')}
								style={styles.cardLogo}
								resizeMode='cover'
							/>
							<View style={styles.cardNameContainer}>
								<Text style={styles.cardName}>
									{item.company}
								</Text>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};
export default CardSelectionInput;
const styles = StyleSheet.create({
	container: { rowGap: 20 },
	inputContainer: {
		marginTop: 10,
		width: constants.DEVICE_WIDTH - 40,
	},
	inputField: {
		borderColor: constants.GRAY_COLOR,
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 40,
		borderWidth: 0.55,
		color: constants.BLACK_TRANSPARENT,
		fontWeight: '500',
		fontSize: 16.5,
		height: 50,
		fontFamily: 'inter',
	},
	clearButton: {
		position: 'absolute',
		right: 10,
		top: '25%',
	},
	cardItem: {
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
	},
	cardLogo: {
		width: IMAGE_SIZE,
		height: IMAGE_SIZE,
		borderRadius: 100,
	},
	cardNameContainer: {
		justifyContent: 'center',
		height: IMAGE_SIZE,
		width: '73%',
	},
	cardName: {
		fontSize: 16.5,
		fontWeight: '600',
		fontFamily: 'inter',
		color: constants.BLACK_TRANSPARENT,
	},
});
