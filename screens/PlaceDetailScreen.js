import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const PlaceDetailScreen = ({ navigation }) => {
  console.log(navigation.getParam("id"));
  return (
    <View style={styles.screen}>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("title")
  };
};

export default PlaceDetailScreen;
