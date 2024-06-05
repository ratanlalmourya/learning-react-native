import { Image, Pressable, Text, View, StyleSheet, Platform } from "react-native";

function MealItem({title, imageURL, duration, complexity, affordability }) {

    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}}
                    style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                   >
            <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri : imageURL}} style={styles.image}  />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
            </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,   
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width:  0, height: 2},
        shadowRadius: 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    }
})