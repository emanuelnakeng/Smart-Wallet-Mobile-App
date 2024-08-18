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
import { useTheme } from '@react-navigation/native';

const CreateCard = ({ navigation }) => {
	const { state, onCloseModalHandler } = useContext(AppContext);
	const { colors } = useTheme();

	return (
		<Modal
			transparent
			visible={state.isModal}
			animationType='slide'
			onRequestClose={onCloseModalHandler}
		>
			<Pressable
				style={{
					backgroundColor: colors.transparency,
					flex: 1,
					justifyContent: 'flex-end',
				}}
				onPress={onCloseModalHandler}
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
								{state.modalLabel}
							</Text>
							<Pressable
								onPress={onCloseModalHandler}
								style={styles.actionContainer}
							>
								<Ionicons
									name='close-circle'
									size={38}
									color={colors.primary}
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
