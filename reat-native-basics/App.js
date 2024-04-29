import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GaolInput from './components/GoalInput';

export default function App() {
  const [modelIsVisible,setModelVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
      ]);
      endAddGoalHandler();
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function startAddGoalHandler() {
    setModelVisible(true);
  }

  function endAddGoalHandler() {
    setModelVisible(false);
  }
  return (
    <>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
        { modelIsVisible && <GaolInput visible={modelIsVisible} onGoalAddHandler={addGoalHandler} onCancel={endAddGoalHandler} /> }
        <View style={styles.goalsContainer}>
          <FlatList 
              data={courseGoals}  
              renderItem={(itemData) => {
                return (
                   <GoalItem 
                    text={itemData.item.text} 
                    id={itemData.item.id}
                    onDeleteItem={deleteItemHandler}
                  />
                )
              }}
              keyExtractor={(item,index) =>  {
                return item.id
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
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
