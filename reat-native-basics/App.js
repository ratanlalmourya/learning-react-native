import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText,setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
      ]);
  }
  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler} />
          {/* Button does not support styling  */}
          <Button title='Add Goal' onPress={addGoalHandler} />     
        </View>
        <View style={styles.goalsContainer}>
          <FlatList 
              data={courseGoals}  
              renderItem={(itemData) => {
                return (
                  <View style={styles.goalItem}>
                      <Text style={styles.textItem}>{itemData.item.text}</Text>
                  </View>
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
    flex: 1
,    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius:6,
    backgroundColor: '#5e0acc',
    padding: 8
  },
  textItem: {
    color: 'white'
  }
});
