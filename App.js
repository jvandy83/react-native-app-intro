import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((prev) => [
			...prev,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};
	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.mainSection}>
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={courseGoals}
					renderItem={(data) => {
						return <GoalItem text={data.item.text} />;
					}}
				/>
			</View>
		</View>
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
