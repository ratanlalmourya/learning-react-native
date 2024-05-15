import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children})
{
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 20,
        padding: 16,
        alignItems: "center",
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,   // Android
        shadowColor: 'black', // iOS
        shadowOffset: {width: 0, height: 2}, // iOS,
        shadowOpacity: 0.5, // iOS,
    },
})