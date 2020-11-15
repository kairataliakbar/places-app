import { ADD_PLACE } from "./placesActions";
import Place from "../modals/place";

const initialValues = {
  places: []
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.dataPlace.title);
      return {
        places: state.places.concat(newPlace)
      };
    default:
      return state;
  };
};
