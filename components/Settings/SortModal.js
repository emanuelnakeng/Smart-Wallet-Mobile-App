import {
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import constants from '../../utils/constants';
import SortItem from './SortItem';
import { Ionicons } from '@expo/vector-icons';

const SortModal = ({ isVisible, onCloseModal }) => {
	const { colors } = useTheme();

	return (
		<Modal
			transparent
			visible={isVisible}
			animationType='slide'
			onRequestClose={onCloseModal}
		>
			<Pressable
				style={{
					backgroundColor: colors.transparency,
					flex: 1,
					justifyContent: 'flex-end',
				}}
				onPress={onCloseModal}
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
								style={[styles.header, { color: colors.text }]}
							>
								Sort by:
							</Text>
							<Pressable
								onPress={onCloseModal}
								style={styles.actionContainer}
							>
								<Ionicons
									name='close-circle'
									size={32}
									color={colors.primary}
								/>
							</Pressable>
						</View>
						<View>
							<SortItem sort='Name (A - Z)' />
							<SortItem sort='Name (Z - A)' />
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Pressable>
		</Modal>
	);
};
export default SortModal;
const styles = StyleSheet.create({
	contentContainer: {
		height: constants.DEVICE_HEIGHT * 0.4,
		borderTopEndRadius: 20,
		borderTopLeftRadius: 20,
	},
	headerContainer: {
		padding: 20,
	},
	header: {
		fontFamily: 'inter-bold',
		fontSize: 20,
		textAlign: 'center',
		lineHeight: 36,
	},
	actionContainer: {
		position: 'absolute',
		right: 20,
		top: 20,
	},
});
