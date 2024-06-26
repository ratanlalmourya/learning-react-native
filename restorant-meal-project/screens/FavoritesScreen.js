import { StyleSheet, Text, View } from "react-native"; 
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../dummy-data";
import { useSelector } from "react-redux";



function FavoritesScreen() {

    // const favoritesMealCtx = useContext(FavoritesContext)
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const favoritesMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if(favoritesMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }
    return <MealsList items={favoritesMeals} />
}

export default FavoritesScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})