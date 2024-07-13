import { createContext, useState } from 'react';

export const CardContext = createContext();
const data = require('../assets/cards.json');

const CardContextProvider = ({ children }) => {
	const [isModal, setIsModal] = useState(false);
	const [selectedCard, setSelectedCard] = useState('');
	const [cardsData, setCardsData] = useState(data);
	const [query, setQuery] = useState({
		value: '',
		isLoading: false,
	});

	const onCloseModalHandler = () => {
		setIsModal(!isModal);
		setQuery({
			value: '',
			isLoading: 'false',
		});
		setSelectedCard('');
		setCardsData(data);
	};

	const resetSearch = () => {
		setQuery({
			value: '',
			isLoading: 'false',
		});
		setCardsData(data);
	};

	const searchChangeHandler = enteredText => {
		setQuery({ value: enteredText, isLoading: false });
		const formatEnteredText = enteredText.toLowerCase();
		const filteredCards = cardsData.filter(item =>
			item.company.toLowerCase().match(formatEnteredText)
		);

		if (enteredText.trim().length > 0) {
			setCardsData(filteredCards);
		} else {
			setCardsData(data);
		}
	};

	return (
		<CardContext.Provider
			value={{
				selectedCard,
				setSelectedCard,
				cardsData,
				resetSearch,
				searchChangeHandler,
				query,
				isModal,
				onCloseModalHandler,
			}}
		>
			{children}
		</CardContext.Provider>
	);
};
export default CardContextProvider;
