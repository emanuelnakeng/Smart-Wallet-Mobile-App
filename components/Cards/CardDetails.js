import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
	ScrollView,
	Image,
} from 'react-native';
import ButtonUI from '../UI/ButtonUI';
import constants from '../../utils/constants';
import FocusAwareStatusBar from '../UI/StatusAwareBar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Barcode } from 'expo-barcode-generator';
import QRCode from 'react-native-qrcode-svg';
import { useContext } from 'react';
import { AppContext } from '../../utils/appContext';

const CardDetails = ({ navigation, route }) => {
	const { deleteCardHandler } = useContext(AppContext);

	return (
		<View style={styles.container}>
			<FocusAwareStatusBar barStyle='dark-content' />
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.innerContainer}>
					<View style={styles.headerContainer}>
						<Pressable
							onPress={() => navigation.goBack()}
							style={styles.navContainer}
						>
							<AntDesign
								name='arrowleft'
								size={30}
								color={constants.BLACK_COLOR}
							/>
						</Pressable>
						<Text style={styles.headerLabel}>
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
									paddingVertical: 40,
									borderRadius: 20,
								}}
							>
								{isNaN(route.params?.cardNumber) ? (
									<QRCode
										value={route.params?.cardNumber}
										color={constants.BLACK_TRANSPARENT}
										size={constants.DEVICE_WIDTH * 0.55}
									/>
								) : (
									<Barcode
										value={route.params?.cardNumber}
										options={{
											format: 'CODE128',
											background: '#fff',
											lineColor:
												constants.BLACK_TRANSPARENT,
											width: 2.5,
											height:
												constants.DEVICE_WIDTH * 0.3,
											marginTop: 40,
											marginBottom: 40,
											fontSize: 16.5,
											textMargin: 5,
											displayValue: false,
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
							>
								Delete card
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
		backgroundColor: constants.BACKGROUND_COLOR,
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
		color: constants.BLACK_TRANSPARENT,
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
