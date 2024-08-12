import { StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import constants from '../../utils/constants';
import ButtonUI from '../UI/ButtonUI';
import { useContext } from 'react';
import { AppContext } from '../../utils/appContext';

const SCAN_SIZE = constants.DEVICE_WIDTH - 40;
const ScanBarcode = () => {
	const { barcodeScannedHandler, onManualEntryHandler } =
		useContext(AppContext);
	const [permission, requestPermission] = useCameraPermissions();

	if (!permission || !permission.granted) {
		return (
			<View style={styles.noPermissionContainer}>
				<Text style={styles.permissionText}>
					We need your permission to use the camera
				</Text>
				<ButtonUI
					backgroundColor={constants.BLACK_COLOR}
					width={constants.DEVICE_WIDTH * 0.75}
					onPress={requestPermission}
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
				onBarcodeScanned={result =>
					barcodeScannedHandler(result.type, result.data)
				}
			>
				<Text style={styles.heading}>
					Scan the barcode on your card
				</Text>
				<View style={styles.scannableContainer} />
				<ButtonUI
					backgroundColor={constants.BACKGROUND_COLOR}
					color={constants.BLACK_TRANSPARENT}
					onPress={onManualEntryHandler}
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
	},
	camera: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		rowGap: 20,
	},
	heading: {
		fontSize: 20,
		color: constants.BACKGROUND_COLOR,
		fontFamily: 'inter-semiBold',
	},
	permissionText: {
		fontSize: 16,
		fontFamily: 'inter-semiBold',
		color: constants.BLACK_TRANSPARENT,
		textAlign: 'center',
	},
	scannableContainer: {
		borderWidth: 1.5,
		borderColor: '#fff',
		width: SCAN_SIZE,
		height: SCAN_SIZE,
		borderRadius: 20,
		marginBottom: 40,
	},
});
