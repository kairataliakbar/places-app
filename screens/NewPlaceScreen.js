import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from "../store/placesActions";

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    marginBottom: 15,
    fontSize: 18,
    fontFamily: "open-sans"
  },
  textInput: {
    fontSize: 18,
    fontFamily: "open-sans",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 2,
    paddingVertical: 4,
    marginBottom: 15
  }
})

const NewPlaceScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(placesActions.addPlace(title));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.textInput}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "New Place"
};

export default NewPlaceScreen;
