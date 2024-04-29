import { StyleSheet, View, Text, Pressable } from "react-native";


export default function GoalItem({text,id,onDeleteItem}) {

    function deleteItem()
    {
        onDeleteItem(id)
    }
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{ color: '#210644' }} 
                onPress={deleteItem}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Text style={styles.textItem}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius:6,
        backgroundColor: '#5e0acc'
      },
      textItem: {
        color: 'white',
        padding: 8
      },
      pressedItem: {
        opacity: 0.5
      }
})