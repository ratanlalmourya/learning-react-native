import { StyleSheet, View, Text } from "react-native";


export default function GoalItem({text}) {

    return (
        <View style={styles.goalItem}>
            <Text style={styles.textItem}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius:6,
        backgroundColor: '#5e0acc',
        padding: 8
      },
      textItem: {
        color: 'white'
      }
})