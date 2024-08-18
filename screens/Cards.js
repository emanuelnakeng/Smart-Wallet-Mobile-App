import CreateCard from '../components/Cards/CreateCard';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../utils/appContext';
import CardsList from '../components/Cards/CardsList';
import ScreenContainer from '../components/UI/ScreenContainer';
import LoadingLottie from '../components/UI/LoadingLottie';
import { View } from 'react-native';
import constants from '../utils/constants';
import { fetchUserCards } from '../utils/http';
import { AuthContext } from '../utils/authContext';

const Cards = ({ navigation }) => {
	const { createCardModalHandler, userCards, setUserCards } =
		useContext(AppContext);
	const { isUser } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUserCardsHandler = async () => {
		try {
			const res = await fetchUserCards(isUser);
			const cardsData = [];
			res.forEach(doc =>
				cardsData.push({ ...doc.data(), cardId: doc.id })
			);
			setUserCards(cardsData);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchUserCardsHandler();
	}, []);

	return (
		<ScreenContainer
			hasActionIcon
			onPressIcon={createCardModalHandler}
			screenTitle='Cards'
		>
			{isLoading ? (
				<View style={{ marginTop: constants.DEVICE_WIDTH / 2.5 }}>
					<LoadingLottie style={{ height: 80, width: 80 }} />
				</View>
			) : (
				<CardsList
					data={userCards}
					maxVisibleCards={4}
					navigation={navigation}
				/>
			)}
			<CreateCard navigation={navigation} />
		</ScreenContainer>
	);
};
export default Cards;
