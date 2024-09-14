import CreateCard from '../components/Cards/CreateCard';
import CardsList from '../components/Cards/CardsList';
import ScreenContainer from '../components/UI/ScreenContainer';
import LoadingLottie from '../components/UI/LoadingLottie';
import { View } from 'react-native';
import constants from '../utils/constants';
import useCardStore from '../store/card-store';

const Cards = ({ navigation }) => {
	const { openCreateCardModal, userCards, isLoading } = useCardStore(
		state => ({
			openCreateCardModal: state.openCreateCardModal,
			isUser: state.isUser,
			getUserCards: state.getUserCards,
			userCards: state.userCards,
			isLoading: state.isLoading,
		})
	);

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
