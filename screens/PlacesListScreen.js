import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";
import PlaceItem from "../components/PlaceItem";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const PlacesListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);

  return (
    <View style={styles.screen}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceItem
            image={null}
            title={itemData.item.title}
            address={null}
            onSelect={() => navigation.navigate("PlaceDetail", {
              id: itemData.item.id,
              title: itemData.item.title
            })}
          />
        )}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "All Places",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Add"
        iconName="ios-add"
        onPress={() => navigation.navigate("NewPlace")}
      />
    </HeaderButtons>
  )
});

export default PlacesListScreen;
