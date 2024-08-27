import {
	Modal,
	Pressable,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Text,
} from 'react-native';
import constants from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';
import CreateCardModalContent from './CreateCardModalContent';
import { useTheme } from '@react-navigation/native';
import useCardStore from '../../store/card-store';

const CreateCard = ({ navigation }) => {
	const { colors } = useTheme();
	const { modalLabel, closeCreateCardModal, isModal } = useCardStore(
		state => ({
			modalLabel: state.modalLabel,
			closeCreateCardModal: state.closeCreateCardModal,
			isModal: state.isModal,
		})
	);

	return (
		<Modal
			transparent
			visible={isModal}
			animationType='slide'
			onRequestClose={closeCreateCardModal}
		>
			<Pressable
				style={{
					backgroundColor: colors.transparency,
					flex: 1,
					justifyContent: 'flex-end',
				}}
				onPress={closeCreateCardModal}
			>
				<TouchableWithoutFeedback style={{ flex: 1 }}>
					<View
						style={[
							styles.contentContainer,
							{
								backgroundColor: colors.backgroundAltModal,
							},
						]}
					>
						<View style={styles.headerContainer}>
							<Text
								style={[
									styles.addCardText,
									{ color: colors.text },
								]}
							>
								{modalLabel}
							</Text>
							<Pressable
								onPress={closeCreateCardModal}
								style={styles.actionContainer}
							>
								<Ionicons
									name='close-circle'
									size={38}
									color={colors.primary}
								/>
							</Pressable>
						</View>
						<CreateCardModalContent navigation={navigation} />
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
		borderTopEndRadius: 20,
		borderTopLeftRadius: 20,
	},
	addCardText: {
		fontFamily: 'inter-bold',
		fontSize: 20,
		textAlign: 'center',
		lineHeight: 36,
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
