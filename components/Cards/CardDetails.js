import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	ScrollView,
	Image,
	Alert,
} from 'react-native';
import ButtonUI from '../UI/ButtonUI';
import constants from '../../utils/constants';
import FocusAwareStatusBar from '../UI/FocusAwareStatusBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Barcode } from 'expo-barcode-generator';
import QRCode from 'react-native-qrcode-svg';
import { useContext } from 'react';
import { AppContext } from '../../utils/appContext';
import { useTheme } from '@react-navigation/native';
import { deleteUserCard } from '../../utils/http';

const CardDetails = ({ navigation, route }) => {
	const { userCards, setUserCards } = useContext(AppContext);
	const theme = useTheme();

	const deleteCardHandler = id => {
		const newCards = userCards.filter(item => item.cardId !== id);
		Alert.alert(
			'Confirm Deletion',
			`Are you sure you want to delete card?`,
			[
				{
					text: 'No',
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: async () => {
						setUserCards(newCards);
						await deleteUserCard(id);
					},
					style: 'default',
				},
			]
		);
	};

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: theme.colors.background },
			]}
		>
			<FocusAwareStatusBar
				barStyle={theme.dark ? 'light-content' : 'dark-content'}
			/>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.innerContainer}>
					<View style={styles.headerContainer}>
						<Pressable
							onPress={() => navigation.goBack()}
							style={styles.navContainer}
						>
							<Ionicons
								name='arrow-back'
								size={30}
								color={theme.colors.text}
							/>
						</Pressable>
						<Text
							style={[
								styles.headerLabel,
								{ color: theme.colors.text },
							]}
						>
							{route.params?.cardName}
						</Text>
					</View>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{ flex: 1 }}
					>
						<View
							style={[
								styles.barcodeScanContainer,
								{
									backgroundColor: route.params?.cardColor,
								},
							]}
						>
							<Image
								source={route.params?.cardLogo}
								style={styles.logoImage}
								resizeMode='contain'
							/>
							<View
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: '#fff',
									width: constants.DEVICE_WIDTH - 40,
									paddingVertical: 30,
									borderRadius: 20,
								}}
							>
								{isNaN(route.params?.cardNumber) ? (
									<QRCode
										value={route.params?.cardNumber}
										color={theme.colors.transparency}
										size={constants.DEVICE_WIDTH * 0.55}
									/>
								) : (
									<Barcode
										value={route.params?.cardNumber}
										options={{
											format: 'CODE128',
											background: '#fff',
											lineColor:
												theme.colors.transparency,
											width: 2.5,
											height:
												constants.DEVICE_WIDTH * 0.3,
											marginTop: 40,
											marginBottom: 40,
											fontSize: 16,
											textMargin: 5,
										}}
									/>
								)}
							</View>
						</View>
						<View style={styles.actionsContainer}>
							<ButtonUI
								backgroundColor='#f08d95'
								onPress={() => {
									deleteCardHandler(route.params?.cardId);
									navigation.navigate('cards');
								}}
								color={theme.colors.transparency}
							>
								Delete Card
							</ButtonUI>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	);
};
export default CardDetails;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		marginTop: 20,
		alignItems: 'center',
	},
	headerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		width: constants.DEVICE_WIDTH - 40,
	},
	navContainer: {
		position: 'absolute',
		left: 0,
	},
	headerLabel: {
		fontFamily: 'inter-bold',
		fontSize: 22,
	},
	barcodeScanContainer: {
		marginTop: 20,
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 40,
		rowGap: 20,
		paddingHorizontal: 20,
	},
	actionsContainer: {
		rowGap: 20,
		marginTop: 40,
	},
	logoImage: {
		height: 50,
		width: 50,
	},
});
