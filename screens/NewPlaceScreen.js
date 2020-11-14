import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const NewPlaceScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "New Place"
};

export default NewPlaceScreen;
