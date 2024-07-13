import { StyleSheet, View } from 'react-native';
import ScreenContainer from '../components/UI/ScreenContainer';
import CardItem from '../components/Cards/CardItem';
import CreateCard from '../components/Cards/CreateCard';
import { useContext } from 'react';
import { CardContext } from '../utils/cardContextAPI';

const starbucksLogo = require('../assets/logo/Group.png');
const ikea = require('../assets/logo/logo.png');

const Cards = () => {
	const { isModal, onCloseModalHandler } = useContext(CardContext);

	return (
		<ScreenContainer
			screenTitle='My Cards'
			hasActionIcon
			onPressIcon={onCloseModalHandler}
		>
			<View style={styles.cardsContainer}>
				<CardItem backgroundColor='#05714B' logo={starbucksLogo} />
				<CardItem backgroundColor='#0058a3' logo={ikea} />
			</View>
			<CreateCard isVisible={isModal} onClose={onCloseModalHandler} />
		</ScreenContainer>
	);
};
export default Cards;
const styles = StyleSheet.create({
	cardsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		rowGap: 20,
		flex: 1,
		paddingTop: 20,
	},
});
