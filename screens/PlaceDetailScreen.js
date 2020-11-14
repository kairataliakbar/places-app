import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const PlaceDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

export default PlaceDetailScreen;
