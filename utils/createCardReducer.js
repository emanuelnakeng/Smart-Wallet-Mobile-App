export const createCardReducer = (state, action) => {
	if (action.type === 'CLOSE_MODAL') {
		return {
			isModal: false,
			modalLabel: '',
			modalContent: {
				selectCard: false,
				scanCard: false,
				cardNumber: false,
			},
		};
	}
	if (action.type === 'SELECT_CARD') {
		return {
			...state,
			isModal: true,
			modalLabel: 'Choose your Card',
			modalContent: {
				selectCard: true,
				scanCard: false,
				cardNumber: false,
			},
		};
	}
	if (action.type === 'SCANNING_CARD') {
		return {
			...state,
			modalLabel: action.payload,
			modalContent: {
				selectCard: false,
				scanCard: true,
				cardNumber: false,
			},
		};
	}
	if (action.type === 'CARD_NUMBER') {
		return {
			...state,
			modalContent: {
				selectCard: false,
				scanCard: false,
				cardNumber: true,
			},
		};
	}
	throw new Error('No matchin action type');
};
