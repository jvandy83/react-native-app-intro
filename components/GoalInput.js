import {
	TextInput,
	StyleSheet,
	View,
	Button,
	Modal,
	Image,
} from 'react-native';
import { useState } from 'react';

export const GoalInput = ({ onAddGoal, isModalVisible, end, onCancel }) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (text) => {
		setEnteredGoalText(text);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText('');
		end();
	};

	return (
		<Modal visible={isModalVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					onChangeText={goalInputHandler}
					style={styles.textInput}
					placeholder='Your course goals'
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button onPress={addGoalHandler} title='ADD GOAL' />
					</View>
					<View style={styles.button}>
						<Button onPress={end} title='CANCEL' />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center', // stretch is default on cross axis
		padding: 8,
		backgroundColor: '#311b6b',
	},
	textInput: {
		width: '70%',
		borderColor: '#cccccc',
		borderWidth: 1,
		marginRight: 8,
		padding: 8,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: '30%',
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
