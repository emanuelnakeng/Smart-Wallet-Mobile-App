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
			userCards: [...state.userCards, newCard],
		}));
	},
	deleteCard: id =>
		//Deletes card
		set(state => ({
			userCards: state.userCards.filter(item => item.cardId !== id),
		})),
	getUserCards: cards =>
		set(state => ({
			userCards: [...state.userCards, ...cards],
		})),
	clearCards: () => set(state => ({ userCards: [] })),
}));

export default useCardStore;
