import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/UI/ScreenContainer';
import RewardItem from '../components/Rewards/RewardItem';

const Rewards = () => {
	return (
		<ScreenContainer screenTitle='Rewards'>
			<ScrollView>
				<View style={{ rowGap: 20, paddingTop: 15 }}>
					<RewardItem />
					<RewardItem />
					<RewardItem />
					<RewardItem />
				</View>
			</ScrollView>
		</ScreenContainer>
	);
};
export default Rewards;
const styles = StyleSheet.create({});
