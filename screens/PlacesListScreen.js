import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Items } from "react-navigation-header-buttons";
import PropTypes from "prop-types";

import CustomHeaderButton from "../components/CustomHeaderButton";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const PlacesListScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Items
          title="Add"
          iconName="ios-add"
          onPress={() => navigation.navigate("NewPlace")}
        />
      </HeaderButtons>
    )
  };
};

PlacesListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default PlacesListScreen;
