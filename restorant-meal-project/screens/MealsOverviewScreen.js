
import { MEALS } from "../dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });


    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} 
                        imageURL={itemData.item.imageUrl}
                        duration={itemData.item.duration}
                        complexity={itemData.item.complexity}
                        affordability={itemData.item.affordability} />
    }

    return (
        <View style={styles.container}>
           <FlatList    
            data={displayedMeals}
            keyExtractor={item => item.id}
            renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})