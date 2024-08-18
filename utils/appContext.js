import { createContext, useReducer, useState } from 'react';
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

	const [isPreviewData, setIsPreviewData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

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
				isPreviewData,
				setIsPreviewData,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
