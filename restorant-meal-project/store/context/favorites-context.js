import { createContext, useState } from "react";

const favoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});


function FavoritesContextProvider({children}){
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((currentFavId) => [...currentFavId,id] )
    }

    function removeFavorite(id){
        setFavoriteMealIds((currentFavId) => currentFavId.filter(mealId => mealId !== id))
    }

    const value = {
        ids:"favoriteMealIds",
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return <favoritesContext.Provider value={value}>{children}</favoritesContext.Provider>
}

export default FavoritesContextProvider;
