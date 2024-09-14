import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

const initialStore = {
	userCards: [],
	selectedCard: {
		cardName: '',
		scannedBarcode: '',
		barcodeType: '',
		cardLogo: '',
		cardColor: '#336633',
	},
	modalLabel: '',
	isModal: false,
	modalContent: {
		selectCard: false,
		scanBarcode: false,
		confirmEntry: false,
	},
	isLoading: false,
	sortOrder: 'Name (A - Z)',
};

const useCardStore = create(set => ({
	...initialStore,
	openCreateCardModal: () =>
		//opens create card modal
		set(state => ({
			modalLabel: 'Select card',
			isModal: true,
			modalContent: { ...state.modalContent, selectCard: true },
		})),
	cardSelectionHandler: cardItem =>
		//selects card and navigates to scanning
		set(state => ({
			modalLabel: cardItem.cardName,
			selectedCard: {
				...state.selectedCard,
				cardName: cardItem.cardName,
				cardLogo: cardItem.cardLogo,
				cardColor: cardItem.cardColor,
			},
			modalContent: {
				...state.modalContent,
				selectCard: false,
				scanBarcode: true,
			},
		})),
	scannedBarcodeHandler: (barcodeType, scannedBarcode) =>
		//Scans barcode and navigates to manual entry
		set(state => ({
			selectedCard: {
				...state.selectedCard,
				barcodeType,
				scannedBarcode,
			},
			modalContent: {
				...state.modalContent,
				scanBarcode: false,
				confirmEntry: true,
			},
		})),
	manualEntryHandler: () =>
		//Handles manual card number entry
		set(state => ({
			modalContent: {
				...state.modalContent,
				scanBarcode: false,
				confirmEntry: true,
			},
		})),

	closeCreateCardModal: () =>
		//closes modal
		set(state => ({
			modalLabel: initialStore.modalLabel,
			isModal: initialStore.isModal,
			selectedCard: {
				...initialStore.selectedCard,
			},
			modalContent: {
				...initialStore.modalContent,
			},
			isPreview: initialStore.isPreview,
		})),

	addCardHandler: (cardId, cardData) => {
		//Adds new card to current array
		const newCard = { ...cardData, cardId };
		set(state => ({
			userCards: [newCard, ...state.userCards],
		}));
	},
	deleteCard: id =>
		//Deletes card
		set(state => ({
			userCards: state.userCards.filter(item => item.cardId !== id),
		})),
	userCardsHandler: async cards => {
		const order = await AsyncStorage.getItem('selectedOrder');
		if (typeof order === 'string') {
			if (order === 'Name (A - Z)') {
				set(state => ({
					sortOrder: order,
					userCards: cards.sort((a, b) =>
						a.cardName.localeCompare(b.cardName)
					),
				}));
			} else if (order === 'Name (Z - A)') {
				set(state => ({
					sortOrder: order,
					userCards: cards.sort((a, b) =>
						b.cardName.localeCompare(a.cardName)
					),
				}));
			}
		}
	},
	clearCards: () => set(state => ({ userCards: [] })),
	toggleLoading: () => set(state => ({ isLoading: !state.isLoading })),
	sortCardsHandler: async selectedOrder => {
		await AsyncStorage.setItem('selectedOrder', selectedOrder);
		if (selectedOrder === 'Name (A - Z)') {
			set(state => ({
				sortOrder: selectedOrder,
				userCards: state.userCards.sort((a, b) =>
					a.cardName.localeCompare(b.cardName)
				),
			}));
		} else if (selectedOrder === 'Name (Z - A)') {
			set(state => ({
				sortOrder: selectedOrder,
				userCards: state.userCards.sort((a, b) =>
					b.cardName.localeCompare(a.cardName)
				),
			}));
		}
	},
}));

export default useCardStore;
