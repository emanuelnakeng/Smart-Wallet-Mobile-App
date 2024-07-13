import CardSelectionInput from './CardSelectionInput';
import ScanBarcode from './ScanBarcode';
import { useContext } from 'react';
import { CardContext } from '../../utils/cardContextAPI';
import PreviewCardNumber from './PreviewCardNumber';

const CreateCardModal = () => {
	const { state } = useContext(CardContext);

	switch (true) {
		case state.modalContent.selectCard:
			return <CardSelectionInput />;
			break;
		case state.modalContent.scanCard:
			return <ScanBarcode />;
			break;
		case state.modalContent.cardNumber:
			return <PreviewCardNumber />;
			break;
		default:
			return null;
			break;
	}
};
export default CreateCardModal;
