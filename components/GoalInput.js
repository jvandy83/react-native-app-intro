import { TextInput, StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';

export const GoalInput = ({ onAddGoal }) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (text) => {
		setEnteredGoalText(text);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				onChangeText={goalInputHandler}
				style={styles.textInput}
				placeholder='Your course goals'
			/>
			<View style={styles.buttonContainer}>
				<Button onPress={addGoalHandler} title='ADD GOAL' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center', // stretch is default on cross axis
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		width: '70%',
		borderColor: '#cccccc',
		borderWidth: 1,
		marginRight: 8,
		padding: 8,
	},
});
