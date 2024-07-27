import PlaceForm from "../components/places/placeForm";
import { insertPlace } from "../util/database";

function AddPlace({navigation}) {

    async function createPlaceHandler(place) {    
        console.log("add place",place);
        await insertPlace(place)
        navigation.navigate("AllPlaces");
    }
    return <PlaceForm onCreatePlace={createPlaceHandler} />
}

export default AddPlace;