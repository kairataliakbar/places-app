import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import AppNavigation from "./navigation/AppNavigation";
import placesReducers from "./store/placesReducer";

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);

  const reducers = combineReducers({
    places: placesReducers
  });

  const store = createStore(reducers, applyMiddleware(ReduxThunk));

  const fetchFonts = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
  };

  if (!fontLoading) return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoading(true)}
    />
  );

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
