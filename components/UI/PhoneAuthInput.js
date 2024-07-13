import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import constants from '../../utils/constants';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import CountriesModal from './CountriesModal';

const INPUT_HEIGHT = constants.DEVICE_HEIGHT * 0.085;
const BORDER_RADIUS = 10;

const PhoneAuthInput = ({ styleProps, props }) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<CountriesModal
				visible={modalVisible}
				onCloseModal={() => setModalVisible(!modalVisible)}
			/>
			<View style={[styles.inputContainer, styleProps]}>
				<TouchableOpacity
					style={styles.selectorContainer}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Text style={styles.countryCodeText}>+270</Text>
					<FontAwesome6
						name='chevron-down'
						size={16}
						color={constants.ACCENT_COLOR}
					/>
				</TouchableOpacity>
				<TextInput
					maxLength={15}
					placeholder='Enter phone number'
					placeholderTextColor={constants.GRAY_COLOR}
					keyboardType='numeric'
					style={styles.inputField}
					{...props}
				/>
			</View>
		</>
	);
};
export default PhoneAuthInput;
const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		borderWidth: 0.55,
		borderColor: constants.GRAY_COLOR,
		borderRadius: BORDER_RADIUS,
		height: INPUT_HEIGHT,
		width: constants.DEVICE_WIDTH - 40,
		alignItems: 'center',
		marginVertical: 10,
	},
	selectorContainer: {
		width: '22%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 2,
		paddingRight: 2,
	},
	inputField: {
		width: '78%',
		paddingLeft: 20,
		borderLeftWidth: 0.5,
		borderColor: constants.GRAY_COLOR,
		fontFamily: 'inter',
		fontSize: 16,
		fontWeight: '500',
		color: 'rgb(0,0,0,0.5)',
	},
	countryCodeText: {
		fontFamily: 'inter',
		fontSize: 16,
		fontWeight: '500',
	},
});
