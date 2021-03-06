import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";

import Colors from "../constants/Colors";

const AppNavigation = createStackNavigator({
  PlacesList: PlacesListScreen,
  PlaceDetail: PlaceDetailScreen,
  Map: MapScreen,
  NewPlace: NewPlaceScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: "white",
    headerTitleStyle: "open-sans-bold",
    headerBackTitleStyle: "open-sans-bold"
  }
});

export default createAppContainer(AppNavigation);
