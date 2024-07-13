import {
	Modal,
	Pressable,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	Text,
} from 'react-native';
import constants from '../../utils/constants';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CardContext } from '../../utils/cardContextAPI';
import CreateCardModal from './CreateCardModal';

const CreateCard = () => {
	const { state, onCloseModalHandler } = useContext(CardContext);

	return (
		<Modal
			transparent
			visible={state.isModal}
			animationType='slide'
			onRequestClose={onCloseModalHandler}
		>
			<Pressable
				style={{
					backgroundColor: constants.BLACK_TRANSPARENT,
					flex: 1,
					justifyContent: 'flex-end',
				}}
				onPress={onCloseModalHandler}
			>
				<TouchableWithoutFeedback style={{ flex: 1 }}>
					<View style={styles.contentContainer}>
						<View style={styles.headerContainer}>
							<Text style={styles.addCardText}>
								{state.modalLabel}
							</Text>
							<TouchableOpacity
								onPress={onCloseModalHandler}
								style={styles.actionContainer}
							>
								<Ionicons
									name='close-outline'
									size={28}
									color={constants.ACCENT_COLOR}
								/>
							</TouchableOpacity>
						</View>
						<CreateCardModal />
					</View>
				</TouchableWithoutFeedback>
			</Pressable>
		</Modal>
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
