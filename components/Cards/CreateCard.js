import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import constants from '../../utils/constants';
import ModalContainer from './ModalContainer';
import { Ionicons } from '@expo/vector-icons';
import CardSelectionInput from './CardSelectionInput';
import { useContext } from 'react';
import ScanBarcode from './ScanBarcode';
import { CardContext } from '../../utils/cardContextAPI';

const CreateCard = ({ isVisible, onClose }) => {
	const { selectedCard, setSelectedCard } = useContext(CardContext);

	return (
		<ModalContainer isVisible={isVisible} onClose={onClose}>
			<TouchableWithoutFeedback style={{ flex: 1 }}>
				<View style={styles.contentContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.addCardText}>
							{!selectedCard
								? 'Choose your Card'
								: selectedCard.company}
						</Text>
						<TouchableOpacity
							onPress={onClose}
							style={styles.actionContainer}
						>
							<Ionicons
								name='close-circle-outline'
								size={26}
								color={constants.BLACK_TRANSPARENT}
							/>
						</TouchableOpacity>
					</View>
					{!selectedCard && (
						<CardSelectionInput
							onSelectCard={card => setSelectedCard(card)}
						/>
					)}
					{selectedCard && <ScanBarcode />}
				</View>
			</TouchableWithoutFeedback>
		</ModalContainer>
	);
};
export default CreateCard;
const styles = StyleSheet.create({
	contentContainer: {
		height: constants.DEVICE_HEIGHT - 60,
		backgroundColor: constants.BACKGROUND_COLOR,
		borderTopEndRadius: 20,
		borderTopLeftRadius: 20,
		alignItems: 'center',
	},
	addCardText: {
		fontFamily: 'inter',
		fontSize: 19.5,
		fontWeight: '600',
		color: constants.BLACK_COLOR,
	},
	headerContainer: {
		width: constants.DEVICE_WIDTH - 40,
		justifyContent: 'center',
		padding: 20,
		alignItems: 'center',
	},
	actionContainer: {
		position: 'absolute',
		right: 0,
	},
});
