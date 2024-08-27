import CreateCard from '../components/Cards/CreateCard';
import { useEffect, useState } from 'react';
import CardsList from '../components/Cards/CardsList';
import ScreenContainer from '../components/UI/ScreenContainer';
import LoadingLottie from '../components/UI/LoadingLottie';
import { View } from 'react-native';
import constants from '../utils/constants';
import { fetchUserCards } from '../utils/http';
import useCardStore from '../store/card-store';
import useAuthStore from '../store/auth-store';

const Cards = ({ navigation }) => {
	const { openCreateCardModal, getUserCards, userCards } = useCardStore(
		state => ({
			openCreateCardModal: state.openCreateCardModal,
			isUser: state.isUser,
			getUserCards: state.getUserCards,
			userCards: state.userCards,
		})
	);
	const isUser = useAuthStore(state => state.isUser);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUserCardsHandler = async () => {
		const response = await fetchUserCards(isUser);
		const cardsData = [];
		response.forEach(doc =>
			cardsData.push({ ...doc.data(), cardId: doc.id })
		);
		getUserCards(cardsData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchUserCardsHandler();
	}, []);

	return (
		<ScreenContainer
			hasActionIcon
			onPressIcon={openCreateCardModal}
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
