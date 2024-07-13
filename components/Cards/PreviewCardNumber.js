import { useContext, useState } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { CardContext } from '../../utils/cardContextAPI';
import constants from '../../utils/constants';
import ButtonUI from '../UI/ButtonUI';

const PreviewCardNumber = () => {
	const { scannedData, setScannedData } = useContext(CardContext);
	const [input, setInput] = useState({
		cardNumber: {
			inputValue: scannedData.cardNumber || '',
			isValid: true,
		},
	});
	const cardNumberChangeHandler = (inputId, enteredText) => {
		setInput(currentInput => {
			return {
				...currentInput,
				[inputId]: { inputValue: enteredText, isValid: true },
			};
		});
	};

	const cardNumberValid = input.cardNumber.inputValue.length > 0;

	const saveCardHandler = () => {
		const data = {
			cardNumber: input.cardNumber.inputValue.trim(),
		};

		if (!cardNumberValid) {
			setInput(currentInputValue => {
				return {
					cardNumber: {
						inputValue: currentInputValue.cardNumber.inputValue,
						isValid: false,
					},
				};
			});
			return;
		}
		setScannedData(data.cardNumber);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.innerContainer}>
					<View style={styles.inputContainer}>
						<Text style={styles.heading}>Card Number</Text>
						<TextInput
							placeholder='Enter your card number'
							placeholderTextColor={constants.GRAY_COLOR}
							style={[
								styles.inputField,
								{
									borderColor: !cardNumberValid
										? 'red'
										: constants.GRAY_COLOR,
									borderWidth: !cardNumberValid ? 1 : 0.6,
								},
							]}
							value={input.cardNumber.inputValue}
							onChangeText={cardNumberChangeHandler.bind(
								this,
								'cardNumber'
							)}
							autoCapitalize='none'
							autoCorrect={false}
							inputMode='numeric'
						/>
					</View>
					<View style={styles.buttonContainer}>
						<ButtonUI
							backgroundColor={constants.BLACK_COLOR}
							color={'#fff'}
							onPress={saveCardHandler}
						>
							Save card
						</ButtonUI>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
export default PreviewCardNumber;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputField: {
		borderRadius: 10,
		paddingHorizontal: 20,
		color: constants.BLACK_TRANSPARENT,
		fontWeight: '500',
		fontSize: 16.5,
		height: 50,
		fontFamily: 'inter',
		width: constants.DEVICE_WIDTH - 40,
	},
	innerContainer: {
		flex: 1,
		justifyContent: 'space-around',
	},
	inputContainer: {
		flex: 1,
		rowGap: 10,
	},
	buttonContainer: {
		height: constants.DEVICE_HEIGHT * 0.2,
	},
	heading: {
		fontFamily: 'inter',
		fontSize: 16,
		fontWeight: '600',
		color: constants.BLACK_TRANSPARENT,
		paddingLeft: 2,
	},
});
