import { useContext, useEffect, useRef, useState } from 'react';
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
import constants from '../../utils/constants';
import ButtonUI from '../UI/ButtonUI';
import { useTheme } from '@react-navigation/native';
import { saveCard } from '../../utils/http';
import useAuthStore from '../../store/auth-store';
import useCardStore from '../../store/card-store';

const ConfirmCardDetails = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		selectedCard,
		addCardHandler,
		closeCreateCardModal,
		isPreviewData,
	} = useCardStore(state => ({
		selectedCard: state.selectedCard,
		addCardHandler: state.addCardHandler,
		closeCreateCardModal: state.closeCreateCardModal,
		isPreviewData: isPreviewData,
	}));
	const [scannedCardNumber, setScannedCardNumber] = useState({
		value: selectedCard.scannedBarcode || '',
		isValid: true,
	});

	const isUser = useAuthStore(state => state.isUser);
	const scannedCardRef = useRef();
	const { colors } = useTheme();

	const cardNumberChangeHandler = enteredText => {
		setScannedCardNumber(current => {
			return {
				...current,
				value: enteredText,
			};
		});
	};

	useEffect(() => {
		scannedCardRef.current.focus();
	}, []);

	const inputIsValid = scannedCardNumber.value.trim().length > 0;

	const onSaveCardHandler = async () => {
		const cardData = {
			cardName: selectedCard.cardName,
			cardLogo: selectedCard.cardLogo,
			cardColor: selectedCard.cardColor,
			cardNumber: scannedCardNumber.value.trim(),
			barcodeType: selectedCard.barcodeType,
		};

		if (!inputIsValid) {
			setScannedCardNumber(current => {
				return {
					value: current.value,
					isValid: false,
				};
			});
			return;
		}
		setIsLoading(true);
		try {
			const cardId = await saveCard(isUser, cardData);
			addCardHandler(cardId, cardData);
			closeCreateCardModal();
			navigation.navigate('details', { ...cardData, cardId });
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.innerContainer}>
					<View style={styles.inputContainer}>
						<Text style={[styles.heading, { color: colors.text }]}>
							Card Number
						</Text>
						<TextInput
							placeholder='Enter your card number'
							ref={scannedCardRef}
							placeholderTextColor={colors.gray}
							style={[
								styles.inputField,
								{
									borderColor: !scannedCardNumber.isValid
										? colors.error
										: colors.gray,
									color: colors.text,
								},
							]}
							value={scannedCardNumber.value}
							onChangeText={cardNumberChangeHandler}
							autoCapitalize='none'
							autoCorrect={false}
							inputMode='text'
							maxLength={15}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<ButtonUI
							backgroundColor={colors.buttonBG}
							color={colors.background}
							onPress={onSaveCardHandler}
							isloading={isLoading}
						>
							Save Card
						</ButtonUI>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
export default ConfirmCardDetails;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: constants.DEVICE_WIDTH,
		marginTop: 30,
	},
	innerContainer: {
		flex: 1,
		justifyContent: 'space-around',
	},
	inputField: {
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 65,
		borderWidth: 0.55,
		fontSize: 16,
		height: 48.5,
		fontFamily: 'inter-semiBold',
	},
	inputContainer: {
		flex: 1,
		rowGap: 10,
		paddingHorizontal: 20,
	},
	buttonContainer: {
		height: constants.DEVICE_WIDTH * 0.4,
	},
	heading: {
		fontFamily: 'inter-semiBold',
		fontSize: 16.5,
	},
});
