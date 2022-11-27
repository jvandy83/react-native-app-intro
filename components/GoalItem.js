import { StyleSheet, View, Text } from 'react-native';

export const GoalItem = ({ text }) => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		backgroundColor: 'purple',
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginVertical: 2,
		borderRadius: 5,
	},
	goalText: {
		color: 'white',
	},
});
