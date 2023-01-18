import {
	StyleSheet,
	View,
	Text,
	Pressable,
	android_ripple,
} from 'react-native';

export const GoalItem = ({ text, onDeleteItem, id }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#dddddd' }}
				onPress={onDeleteItem.bind(this, id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
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
	pressedItem: {
		opacity: 0.5,
	},
});
