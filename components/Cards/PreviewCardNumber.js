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
	const scannedCardRef = useRef();

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

	const onSaveCard = () => {
		const cardData = {
			cardName: selectedCard.cardName,
			cardLogo: selectedCard.cardLogo,
			cardColor: selectedCard.cardColor,
			cardNumber: scannedCardNumber.value.trim(),
			barcodeType: scannedBarcode.barcodeType,
			cardId: `${selectedCard.cardName}${scannedCardNumber.value.trim()}`,
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
		setTimeout(() => {
			setUserCards(currentCards => [cardData, ...currentCards]);
			setIsLoading(false);
			setIsPreviewData(cardData);
			onCloseModalHandler();
			if (isPreviewData) {
				navigation.navigate('details', cardData);
			}
		}, 2000);
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
							ref={scannedCardRef}
							placeholderTextColor={constants.GRAY_COLOR}
							style={[
								styles.inputField,
								{
									borderColor: !scannedCardNumber.isValid
										? 'red'
										: constants.GRAY_COLOR,
								},
							]}
							value={scannedCardNumber.value}
							onChangeText={cardNumberChangeHandler}
							autoCapitalize='none'
							autoCorrect={false}
							inputMode='text'
							maxLength={20}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<ButtonUI
							backgroundColor={constants.BLACK_COLOR}
							color={'#fff'}
							onPress={onSaveCard}
							isloading={isLoading}
						>
							Save
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
		borderColor: constants.GRAY_COLOR,
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 65,
		borderWidth: 0.55,
		color: constants.BLACK_TRANSPARENT,
		fontSize: 16,
		height: 48,
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
		color: constants.BLACK_TRANSPARENT,
	},
});
