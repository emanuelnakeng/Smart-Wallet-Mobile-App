import {
	Modal,
	Pressable,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Text,
} from 'react-native';
import constants from '../../utils/constants';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CreateCardModal from './CreateCardModal';
import { AppContext } from '../../utils/appContext';

const CreateCard = ({ navigation }) => {
	const { state, onCloseModalHandler } = useContext(AppContext);

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
							<Pressable
								onPress={onCloseModalHandler}
								style={styles.actionContainer}
							>
								<Ionicons
									name='close-circle'
									size={32}
									color={constants.ACCENT_COLOR}
								/>
							</Pressable>
						</View>
						<CreateCardModal navigation={navigation} />
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
	},
	addCardText: {
		fontFamily: 'inter-bold',
		fontSize: 20.5,
		color: constants.BLACK_TRANSPARENT,
		textAlign: 'center',
	},
	headerContainer: {
		marginTop: 20,
		paddingHorizontal: 20,
		justifyContent: 'center',
	},
	actionContainer: {
		position: 'absolute',
		right: 20,
	},
});
