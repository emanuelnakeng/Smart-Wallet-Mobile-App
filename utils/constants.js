import { Dimensions } from 'react-native';

export default constants = {
	DEVICE_HEIGHT: Dimensions.get('window').height,
	DEVICE_WIDTH: Dimensions.get('window').width,
	FONT: require('../assets/fonts/inter.ttf'),
	ACCENT_COLOR: '#d78df0',
	BACKGROUND_COLOR: '#FFFEFD',
	GRAY_COLOR: '#CACACA',
	BLACK_COLOR: '#000',
	BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.8)',
};
