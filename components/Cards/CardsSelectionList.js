import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	FlatList,
} from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../utils/appContext';
import CardSelectionItem from './CardSelectionItem';
import data from '../../data/cardsData';
import { useTheme } from '@react-navigation/native';

const CardsSelectionList = () => {
	const { onClearSearch, selectCardHandler, onUserSearch, userQuery } =
		useContext(AppContext);
	const { colors } = useTheme();
	// const sortedCards = data.sort((a, b) => b.cardName - a.cardName);
	// console.log(sortedCards.cardName);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Search card'
					placeholderTextColor={colors.gray}
					autoCapitalize='none'
					autoCorrect={false}
					value={userQuery}
					style={[
						styles.inputField,
						{ color: colors.text, borderColor: colors.gray },
					]}
					onChangeText={onUserSearch}
				/>
				<Pressable style={styles.clearButton} onPress={onClearSearch}>
					<Text style={[styles.clearText, { color: colors.gray }]}>
						Reset
					</Text>
				</Pressable>
			</View>
			<FlatList
				data={data.sort((a, b) => a.cardName.localeCompare(b.cardName))}
				keyboardDismissMode
				scrollEventThrottle={16}
				keyExtractor={item => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ padding: 20, paddingTop: 40 }}
				renderItem={({ item }) => {
					//if query is empty
					if (userQuery === '') {
						return (
							<CardSelectionItem
								item={item}
								onCardSelection={selectCardHandler}
								key={item.id}
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
								key={item.id}
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
		paddingTop: 30,
		flex: 1,
	},
	inputContainer: { paddingHorizontal: 20 },
	inputField: {
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 65,
		borderWidth: 0.55,
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
	},
});
