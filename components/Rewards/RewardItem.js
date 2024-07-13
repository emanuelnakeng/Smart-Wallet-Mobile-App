import { StyleSheet, Text, View, Image } from 'react-native';
import constants from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';

const RewardItem = () => {
	return (
		<View style={styles.rewardContainer}>
			<Image
				style={styles.imageEcclipse}
				source={require('../../assets/logo/kfclogo.png')}
			/>
			<View style={styles.rewardDetailContainer}>
				<Text style={styles.offerText}>10% off</Text>
				<Text style={styles.rewardCompany}>KFC</Text>
				<View style={styles.dateUntilContainer}>
					<Ionicons
						name='time-outline'
						size={20}
						color={constants.ACCENT_COLOR}
					/>
					<Text style={styles.valid}>Expires in 5 Days</Text>
				</View>
			</View>
		</View>
	);
};
export default RewardItem;
const styles = StyleSheet.create({
	rewardContainer: {
		height: 115,
		borderWidth: 1.5,
		borderColor: constants.ACCENT_COLOR,
		borderStyle: 'dashed',
		borderRadius: 10,
		flexDirection: 'row',
		columnGap: 20,
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	imageEcclipse: {
		height: 72,
		width: 72,
		borderRadius: 100,
		resizeMode: 'fill',
		borderWidth: 0.55,
		borderColor: constants.ACCENT_COLOR,
		borderStyle: 'dashed',
	},
	offerText: {
		fontSize: 18,
		fontFamily: 'inter',
		color: 'rgba(0,0,0,0.8)',
		textTransform: 'uppercase',
		fontWeight: '700',
	},
	rewardCompany: {
		fontSize: 16,
		fontFamily: 'inter',
		color: 'rgba(0,0,0,0.8)',
		textTransform: 'uppercase',
		fontWeight: '600',
	},
	rewardDetailContainer: {
		rowGap: 5,
		borderColor: constants.GRAY_COLOR,
	},
	dateUntilContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 5,
	},
	valid: {
		fontFamily: 'inter',
		color: constants.GRAY_COLOR,
		fontSize: 14,
		fontWeight: '500',
	},
});
