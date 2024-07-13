import { Button, StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import constants from '../../utils/constants';
import { useEffect, useState } from 'react';

const ScanBarcode = ({ onClose, cameraPermission }) => {
	const [permission, requestPermission] = useCameraPermissions();
	const [scanData, setScanData] = useState('');

	useEffect(() => {
		requestPermission();
	}, []);

	const barcodeScannedHandler = ({ type, data }) => {
		setScanData(data);
		console.log(data);
	};

	if (!permission) {
		return (
			<View>
				<Text style={{ textAlign: 'center' }}>
					We need your permission to use the camera
				</Text>
				<Button onPress={requestPermission} title='grant permission' />
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
				onBarcodeScanned={scanData ? undefined : barcodeScannedHandler}
			>
				<Text style={styles.heading}>
					Scan the barcode on your card
				</Text>
				<View style={styles.scannableContainer} />
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
	camera: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 80,
		rowGap: 40,
	},
	heading: {
		fontSize: 18.5,
		color: constants.BACKGROUND_COLOR,
		fontFamily: 'inter',
		fontWeight: '600',
	},
	scannableContainer: {
		borderWidth: 1.5,
		borderColor: '#fff',
		width: constants.DEVICE_WIDTH - 40,
		height: constants.DEVICE_HEIGHT * 0.2,
		borderRadius: 10,
	},
});
