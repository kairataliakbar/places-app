import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSave = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    navigation.setParams({ onSave: handleSave });
  }, [handleSave]);

  const handleSelectLocation = (event) => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  return (
    <MapView
      style={styles.map}
      region={region}
      onPress={handleSelectLocation}
    >
      {selectedLocation && <Marker title="Picked Location" coordinate={selectedLocation} />}
    </MapView>
  );
};

MapScreen.navigationOptions = ({ navigation }) => {
  const onSave = navigation.getParam("onSave");

  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-checkmark-circle"
          onPress={onSave}
        />
      </HeaderButtons>
    ),
  };
};

export default MapScreen;
