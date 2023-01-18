import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((prev) => [
			...prev,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};
	const deleteGoalHandler = (id) => {
		setCourseGoals((courseGoals) => {
			return courseGoals.filter((goal) => goal.id !== id);
		});
	};
	const startAddGoalHandler = () => {
		setIsModalVisible(true);
	};
	const endAddGoalHandler = () => {
		setIsModalVisible(false);
	};
	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color='purple'
					onPress={startAddGoalHandler}
				/>
				{isModalVisible && (
					<GoalInput
						isModalVisible={isModalVisible}
						deleteGoalHandler={deleteGoalHandler}
						end={endAddGoalHandler}
						onAddGoal={addGoalHandler}
					/>
				)}
				<View style={styles.mainSection}>
					<FlatList
						keyExtractor={(item, index) => item.id}
						data={courseGoals}
						renderItem={(data) => {
							return (
								<GoalItem
									id={data.item.id}
									text={data.item.text}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	mainSection: {
		flex: 5,
	},
});
