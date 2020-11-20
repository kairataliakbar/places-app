import React, { useState } from "react";
import {
  View, Text, Button, Alert, StyleSheet, ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";
import MapLocation from "./MapLocation";

const styles = StyleSheet.create({
  locationSelect: {
    alignItems: "center",
    marginBottom: 15,
  },
  locationPreview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 14,
    fontFamily: "open-sans",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

const SelectLocation = ({ navigation }) => {
  const [pickedLoaction, setPickedLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to gtant location permissions to use this app.",
        [{ text: "Okey" }],
      );
      return false;
    }
    return true;
  };

  const handlePickerLocation = async () => {
    const resultPermissions = await getPermissions();
    if (!resultPermissions) {
      return;
    }
    try {
      setIsLoading(true);
      const userLocation = await Location.getCurrentPositionAsync();
      setPickedLocation({
        lat: userLocation.coords.latitude,
        lng: userLocation.coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "Okey" }],
      );
    }
    setIsLoading(false);
  };

  const handlePickOnMap = () => {
    navigation.navigate("Map");
  };

  return (
    <View style={styles.locationSelect}>
      <MapLocation
        style={styles.locationPreview}
        location={pickedLoaction}
        onPress={handlePickOnMap}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <Text style={styles.text}>No location chosen yet!</Text>
        )}
      </MapLocation>
      <View style={styles.actions}>
        <Button
          title="Get User Location"
          color={Colors.primary}
          onPress={handlePickerLocation}
        />
        <Button
          title="Pick on Map"
          color={Colors.primary}
          onPress={handlePickOnMap}
        />
      </View>
    </View>
  );
};

export default SelectLocation;
