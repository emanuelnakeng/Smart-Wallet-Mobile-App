import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	FlatList,
} from 'react-native';
import constants from '../../utils/constants';
import { useContext } from 'react';
import { AppContext } from '../../utils/appContext';
import CardSelectionItem from './CardSelectionItem';
import data from '../../utils/logos/logosData';
import ButtonUI from '../UI/ButtonUI';

const CardsSelectionList = () => {
	const { onClearSearch, selectCardHandler, onUserSearch, userQuery } =
		useContext(AppContext);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Search card'
					placeholderTextColor={constants.GRAY_COLOR}
					autoCapitalize='none'
					autoCorrect={false}
					value={userQuery}
					style={styles.inputField}
					onChangeText={onUserSearch}
				/>
				<Pressable style={styles.clearButton} onPress={onClearSearch}>
					<Text style={styles.clearText}>Clear</Text>
				</Pressable>
			</View>
			<FlatList
				data={data}
				keyboardDismissMode
				scrollEventThrottle={16}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 20 }}
				renderItem={({ item, index }) => {
					//if query is empty
					if (userQuery === '') {
						return (
							<CardSelectionItem
								item={item}
								index={index}
								onCardSelection={selectCardHandler}
							/>
						);
					}

					//if user started searching
					if (
						item.cardName
							.toLowerCase()
							.includes(userQuery.toLowerCase())
					) {
						return (
							<CardSelectionItem
								item={item}
								index={index}
								onCardSelection={selectCardHandler}
							/>
						);
					}
				}}
			/>
		</View>
	);
};
export default CardsSelectionList;
const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		rowGap: 20,
	},
	inputContainer: {
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	inputField: {
		borderColor: constants.GRAY_COLOR,
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 65,
		borderWidth: 0.55,
		color: constants.BLACK_TRANSPARENT,
		fontSize: 16,
		height: 48,
		fontFamily: 'inter-semiBold',
	},
	clearButton: {
		position: 'absolute',
		right: 40,
		top: '34%',
	},
	clearText: {
		fontSize: 13.5,
		fontFamily: 'inter-semiBold',
		color: constants.GRAY_COLOR,
	},
});
