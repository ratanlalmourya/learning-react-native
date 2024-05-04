import { StyleSheet, Text, View } from "react-native";
import Title from "../components/title";


function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's screen</Title>
            <Text>GUESS</Text>
            <View>
                <Text>Higher or lower ?</Text>
                <Text> + -</Text>
            </View>
            <View><Text>LOG ROUNDS</Text></View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
    }
})