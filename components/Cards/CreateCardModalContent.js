import ScanBarcode from './ScanBarcode';
import ConfirmCardDetails from './ConfirmCardDetails';
import CardsOptionsList from './CardsOptionsList';
import useCardStore from '../../store/card-store';

const CreateCardModalContent = ({ navigation }) => {
	const modalContent = useCardStore(state => state.modalContent);

	switch (true) {
		case modalContent.selectCard:
			return <CardsOptionsList />;
			break;
		case modalContent.scanBarcode:
			return <ScanBarcode />;
			break;
		case modalContent.confirmEntry:
			return <ConfirmCardDetails navigation={navigation} />;
			break;
		default:
			return null;
			break;
	}
};
export default CreateCardModalContent;
