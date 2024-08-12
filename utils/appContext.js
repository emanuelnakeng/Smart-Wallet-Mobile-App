import { createContext, useReducer, useState } from 'react';
import { Alert } from 'react-native';
import { createCardReducer } from './createCardReducer';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [userCards, setUserCards] = useState([]);
	const [selectedCard, setSelectedCard] = useState('');
	const [userQuery, setUserQuery] = useState('');
	const [scannedBarcode, setScannedBarcode] = useState({
		cardNumber: '',
		barcodeType: '',
	});
	const [isLoading, setIsLoading] = useState();
	const [isPreviewData, setIsPreviewData] = useState({});

	//Controls the create card modal content
	const [state, dispatch] = useReducer(createCardReducer, {
		isModal: false,
		modalLabel: '',
		modalContent: {
			selectCard: false,
			scanCard: false,
			cardNumber: false,
		},
	});

	//Selects card then switch to scanning
	const selectCardHandler = item => {
		setSelectedCard(item);
		dispatch({ type: 'SCANNING_CARD', payload: item.cardName });
	};

	//resets modal state
	const onCloseModalHandler = () => {
		dispatch({ type: 'CLOSE_MODAL' });
		setUserQuery('');
		setSelectedCard('');
		setScannedBarcode({ cardNumber: '', barcodeType: '' });
	};

	//Handles once barcode scanned
	const barcodeScannedHandler = (type, data) => {
		setScannedBarcode({ cardNumber: data, barcodeType: type });
		dispatch({ type: 'CARD_NUMBER' });
	};

	const deleteCardHandler = cardIndex => {
		const newCards = userCards.filter(
			cardItem => cardItem.cardId !== cardIndex
		);
		Alert.alert('Confirm Delete', `Are you sure you want to delete card?`, [
			{
				text: 'No',
				style: 'cancel',
			},
			{
				text: 'Yes',
				onPress: () => setUserCards(newCards),
				style: 'destructive',
			},
		]);
	};

	const onSaveCardHandler = () => {};

	return (
		<AppContext.Provider
			value={{
				selectedCard,
				onClearSearch: () => setUserQuery(''),
				onCloseModalHandler,
				userCards,
				setUserCards,
				scannedBarcode,
				barcodeScannedHandler,
				createCardModalHandler: () => dispatch({ type: 'SELECT_CARD' }),
				state,
				selectCardHandler,
				setScannedBarcode,
				onManualEntryHandler: () => dispatch({ type: 'CARD_NUMBER' }),
				onUserSearch: enteredText => setUserQuery(enteredText),
				userQuery,
				onSaveCardHandler,
				isLoading,
				deleteCardHandler,
				isPreviewData,
				setIsLoading,
				setIsPreviewData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
