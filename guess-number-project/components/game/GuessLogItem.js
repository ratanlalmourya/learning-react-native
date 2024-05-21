import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber,  guess}) {

    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>{guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: Colors.primary800,
        padding: 12,
        marginVertical: 8,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0,height:0},
        shadowOpacity:0.25,
        shadowRadius: 3
    }
})