import PlaceForm from "../components/places/placeForm";

function AddPlace({navigation}) {

    function createPlaceHandler(place) {
        navigation.navigate("AllPlaces",{
            place: place
        });
    }
    return <PlaceForm onCreatePlace={createPlaceHandler} />
}

export default AddPlace;