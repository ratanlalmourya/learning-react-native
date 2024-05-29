import { FlatList } from "react-native";
import { CATEGORIES } from "../dummy-data";
import CategoryGroupTile from "../components/CategoryGroupTile";

function renderCategoryItem(itemData){
    return <CategoryGroupTile title={itemData.item.title} color={itemData.item.color} />
}

function CategoriesScreen() {
    return  <FlatList   
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
             />
}

export default CategoriesScreen;