import { StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import constants from '../../utils/constants';
import ButtonUI from '../UI/ButtonUI';
import { useContext } from 'react';
import { CardContext } from '../../utils/cardContextAPI';

const SCAN_SIZE = constants.DEVICE_WIDTH - 40;
const ScanBarcode = () => {
	const { scannedData, barcodeScannedHandler, manualEntryHandler } =
		useContext(CardContext);
	const [permission, requestPermission] = useCameraPermissions();

	if (!permission) {
		return (
			<View style={styles.noPermissionContainer}>
				<Text style={styles.permissionText}>
					We need your permission to use the camera
				</Text>
				<ButtonUI
					backgroundColor={constants.BLACK_TRANSPARENT}
					width={250}
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
				onBarcodeScanned={
					scannedData ? undefined : barcodeScannedHandler
				}
			>
				<Text style={styles.heading}>
					Scan the barcode on your card
				</Text>
				<View style={styles.scannableContainer} />
				<ButtonUI
					backgroundColor={constants.BACKGROUND_COLOR}
					color={constants.BLACK_TRANSPARENT}
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
		rowGap: 40,
	},
	heading: {
		fontSize: 18.5,
		color: constants.BACKGROUND_COLOR,
		fontFamily: 'inter',
		fontWeight: '600',
	},
	permissionText: {
		fontSize: 16.5,
		fontFamily: 'inter',
		color: constants.BLACK_TRANSPARENT,
		textAlign: 'center',
		fontWeight: '400',
	},
	scannableContainer: {
		borderWidth: 1.5,
		borderColor: '#fff',
		width: SCAN_SIZE,
		height: SCAN_SIZE,
		borderRadius: 20,
	},
});
