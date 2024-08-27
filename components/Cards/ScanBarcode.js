import { StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import constants from '../../utils/constants';
import ButtonUI from '../UI/ButtonUI';
import { useTheme } from '@react-navigation/native';
import useCardStore from '../../store/card-store';

const SCAN_SIZE = constants.DEVICE_WIDTH - 40;

const ScanBarcode = () => {
	const { colors } = useTheme();

	const { scannedBarcodeHandler, manualEntryHandler } = useCardStore(
		state => ({
			scannedBarcodeHandler: state.scannedBarcodeHandler,
			manualEntryHandler: state.manualEntryHandler,
		})
	);
	const [permission, requestPermission] = useCameraPermissions();

	if (!permission || !permission.granted) {
		return (
			<View style={styles.noPermissionContainer}>
				<Text style={[styles.permissionText, { color: colors.text }]}>
					We need your permission to access the device camera
				</Text>
				<ButtonUI
					backgroundColor={colors.text}
					width={constants.DEVICE_WIDTH * 0.7}
					onPress={requestPermission}
					color={colors.background}
				>
					Grant Permission
				</ButtonUI>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<CameraView
				style={styles.camera}
				barcodeScannerSettings={{
					barcodeTypes: ['code128', 'qr'],
				}}
				flash='auto'
				onBarcodeScanned={scanned =>
					scannedBarcodeHandler(scanned.type, scanned.data)
				}
			>
				<Text style={styles.heading}>
					Scan the barcode on your card
				</Text>
				<View style={[styles.scannableContainer]} />
				<ButtonUI
					backgroundColor='#fff'
					color='#000'
					onPress={manualEntryHandler}
				>
					Enter Manually
				</ButtonUI>
			</CameraView>
		</View>
	);
};

export default ScanBarcode;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: constants.DEVICE_WIDTH,
		paddingTop: 10,
	},
	noPermissionContainer: {
		flex: 1,
		justifyContent: 'center',
		rowGap: 20,
		paddingHorizontal: 20,
	},
	camera: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		rowGap: 20,
		marginTop: 5,
	},
	heading: {
		fontSize: 20.5,
		lineHeight: 28,
		fontFamily: 'inter-semiBold',
		color: '#fff',
	},
	permissionText: {
		fontSize: 16,
		fontFamily: 'inter-semiBold',
		textAlign: 'center',
		lineHeight: 28,
	},
	scannableContainer: {
		borderWidth: 1.5,
		width: SCAN_SIZE,
		height: SCAN_SIZE,
		borderRadius: 20,
		marginBottom: 40,
		borderColor: '#fff',
	},
});
