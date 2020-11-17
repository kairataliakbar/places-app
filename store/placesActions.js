import * as FileSystem from "expo-file-system";

import { insertPlace, fetchPlaces } from "../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const FETCH_PLACES = "FETCH_PLACES";

export const addPlace = (title, imageUri) => {
  return async (dispatch) => {
    const fileName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath
      });

      const resData = await insertPlace(title, newPath, "Address", 15.6, 13.4);

      dispatch({ type: ADD_PLACE, dataPlace: { id: resData, title, imageUri: newPath } });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const resData = await fetchPlaces();

      dispatch({ type: FETCH_PLACES, places: resData.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
