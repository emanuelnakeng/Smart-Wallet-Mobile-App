import { createContext, useReducer, useState } from 'react';
import { createCardReducer } from './createCardReducer';

export const CardContext = createContext();
const data = require('../assets/cards.json');

const CardContextProvider = ({ children }) => {
	const [selectedCard, setSelectedCard] = useState('');
	const [cardsData, setCardsData] = useState(data);
	const [query, setQuery] = useState({
		value: '',
		isLoading: false,
	});

	const [scannedData, setScannedData] = useState('');
	const [myCards, setMyCards] = useState([]);

	const [state, dispatch] = useReducer(createCardReducer, {
		isModal: false,
		modalLabel: '',
		modalContent: {
			selectCard: false,
			scanCard: false,
			cardNumber: false,
		},
	});

	const selectCardHandler = card => {
		setSelectedCard(card);
		dispatch({ type: 'SCANNING_CARD', payload: card.company });
	};

	const modalOpenHandler = () => {
		dispatch({ type: 'SELECT_CARD' });
	};

	const onCloseModalHandler = () => {
		dispatch({ type: 'CLOSE_MODAL' });
		setQuery({
			value: '',
			isLoading: 'false',
		});
		setCardsData(data);
		setSelectedCard('');
		setScannedData('');
	};

	const resetSearch = () => {
		setQuery({
			value: '',
			isLoading: 'false',
		});
		setCardsData(data);
	};

	const barcodeScannedHandler = ({ type, data }) => {
		setScannedData({ cardNumber: data, barcodeType: type });
		dispatch({ type: 'CARD_NUMBER' });
	};

	const manualEntryHandler = () => {
		dispatch({ type: 'CARD_NUMBER' });
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
				cardsData,
				resetSearch,
				searchChangeHandler,
				query,
				onCloseModalHandler,
				myCards,
				setMyCards,
				scannedData,
				barcodeScannedHandler,
				modalOpenHandler,
				state,
				selectCardHandler,
				setScannedData,
				manualEntryHandler,
			}}
		>
			{children}
		</CardContext.Provider>
	);
};
export default CardContextProvider;
