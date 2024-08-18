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
import { AppContext } from '../../utils/appContext';
import { useTheme } from '@react-navigation/native';
import { saveCard } from '../../utils/http';
import { AuthContext } from '../../utils/authContext';

const PreviewCardNumber = ({ navigation }) => {
	const {
		isLoading,
		isPreviewData,
		scannedBarcode,
		selectedCard,
		setUserCards,
		setIsLoading,
		setIsPreviewData,
		onCloseModalHandler,
	} = useContext(AppContext);
	const { isUser } = useContext(AuthContext);
	const scannedCardRef = useRef();
	const { colors } = useTheme();

	const [scannedCardNumber, setScannedCardNumber] = useState({
		value: scannedBarcode.cardNumber || '',
		isValid: true,
	});

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
			barcodeType: scannedBarcode.barcodeType,
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
			setUserCards(currentCards => {
				const newCardsArray = [
					...currentCards,
					{ ...cardData, cardId },
				];
				return newCardsArray;
			});
			setIsLoading(false);
			setIsPreviewData({ ...cardData, cardId });
			onCloseModalHandler();
			if (isPreviewData) {
				navigation.navigate('details', { ...cardData, cardId });
			}
		} catch (error) {
			setIsLoading(true);
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
export default PreviewCardNumber;
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
