import {
	StyleSheet,
	Text,
	View,
	Modal,
	SafeAreaView,
	TextInput,
	FlatList,
	Image,
	TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import constants from '../../utils/constants';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const countriesData = require('../../assets/countries');

const CountriesModal = props => {
	const [searchQuery, setSearchQuery] = useState('');
	const [countries, setCountries] = useState('');

	useEffect(() => {
		setCountries(countriesData);
	}, []);
	return (
		<Modal
			animationType='slide'
			visible={props.visible}
			onRequestClose={props.onCloseModal}
		>
			<SafeAreaView style={styles.outerContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.heading}>Select Country</Text>
					<MaterialIcons
						name='close'
						size={28}
						color='black'
						onPress={props.onCloseModal}
					/>
				</View>
				<View style={styles.countriesContainer}>
					<View style={styles.searchContainer}>
						<TextInput
							placeholder='Search'
							placeholderTextColor={constants.GRAY_COLOR}
							style={styles.searchBox}
							autoCapitalize='none'
							clearButtonMode='always'
							autoCorrect={false}
							value={searchQuery}
						/>
						<FontAwesome
							name='search'
							size={22}
							color='rgba(0,0,0,0.65)'
							style={styles.searchIcon}
						/>
					</View>
					<FlatList
						keyboardDismissMode
						data={countries}
						scrollEventThrottle={16}
						showsVerticalScrollIndicator={false}
						keyExtractor={item => item.country}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									key={`${item.country}`}
									style={styles.countryPickerContainer}
								>
									<Image
										source={{
											uri: `https://flagsapi.com/${item.iso}/flat/64.png`,
										}}
										height={30}
										width={30}
									/>
									<Text style={styles.countryName}>
										{item.country}
									</Text>
								</TouchableOpacity>
							);
						}}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
};
export default CountriesModal;
const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: constants.BACKGROUND_COLOR,
		width: constants.DEVICE_WIDTH,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
	},
	countriesContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	heading: {
		fontSize: 24,
		color: '#000',
		fontWeight: '700',
	},
	countryPickerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 0.55,
		borderBottomColor: constants.GRAY_COLOR,
		paddingVertical: 10.5,
	},
	countryName: {
		fontFamily: 'inter',
		fontSize: 16,
		fontWeight: '500',
		paddingLeft: 20,
		color: 'rgba(0, 0, 0, 0.75)',
	},
	searchBox: {
		borderColor: constants.GRAY_COLOR,
		borderRadius: 10,
		paddingLeft: 50,
		borderWidth: 0.55,
		color: 'rgba(0, 0, 0, 0.75)',
		fontWeight: '400',
		fontSize: 16.5,
		height: constants.DEVICE_HEIGHT * 0.076,
	},
	searchContainer: {
		paddingBottom: 20,
	},
	searchIcon: {
		position: 'absolute',
		top: '30%',
		left: '4%',
	},
});
