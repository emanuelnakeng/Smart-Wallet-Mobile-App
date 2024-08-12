import ScanBarcode from './ScanBarcode';
import { useContext } from 'react';
import PreviewCardNumber from './PreviewCardNumber';
import { AppContext } from '../../utils/appContext';
import CardsSelectionList from './CardsSelectionList';

const CreateCardModal = ({ navigation }) => {
	const { state } = useContext(AppContext);

	switch (true) {
		case state.modalContent.selectCard:
			return <CardsSelectionList />;
			break;
		case state.modalContent.scanCard:
			return <ScanBarcode />;
			break;
		case state.modalContent.cardNumber:
			return <PreviewCardNumber navigation={navigation} />;
			break;
		default:
			return null;
			break;
	}
};
export default CreateCardModal;
