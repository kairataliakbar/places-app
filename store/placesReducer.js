import { ADD_PLACE, FETCH_PLACES } from "./placesActions";
import Place from "../modals/place";

const initialValues = {
  places: []
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return {
        places: action.places.map((place) => new Place(
          place.id.toString(),
          place.title,
          place.imageUri
        ))
      };
    case ADD_PLACE:
      const newPlace = new Place(
        action.dataPlace.id.toString(),
        action.dataPlace.title,
        action.dataPlace.imageUri
      );
      return {
        places: state.places.concat(newPlace)
      };
    default:
      return state;
  };
};
