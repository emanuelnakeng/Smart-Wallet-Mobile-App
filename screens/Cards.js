import CreateCard from '../components/Cards/CreateCard';
import { useContext } from 'react';
import { AppContext } from '../utils/appContext';
import CardsList from '../components/Cards/CardsList';
import ScreenContainer from '../components/UI/ScreenContainer';
import { AuthContext } from '../utils/authContext';
import { ThemeContext } from '../utils/themeContext';

const Cards = ({ navigation }) => {
	const { createCardModalHandler, userCards } = useContext(AppContext);
	// const { isDark } = useContext(ThemeContext);
	// console.log(isDark);

	return (
		<ScreenContainer
			hasActionIcon
			onPressIcon={createCardModalHandler}
			screenTitle='Cards'
		>
			<CardsList
				data={userCards}
				maxVisibleCards={4}
				navigation={navigation}
			/>
			<CreateCard navigation={navigation} />
		</ScreenContainer>
	);
};
export default Cards;
