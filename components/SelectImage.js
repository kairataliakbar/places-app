import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  imageSelect: {
    alignItems: "center",
    marginBottom: 15
  },
  imagePreview: {
    height: 200,
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 14,
    fontFamily: "open-sans"
  }
});

const SelectImage = ({ onSelectImage }) => {
  const [pickedImage, setPickedImage] = useState();

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to gtant camera permissions to use this app.",
        [{ text: "Okey" }]
      );
      return false;
    }
    return true;
  };

  const handlePickerImage = async () => {
    const resultPermissions = await getPermissions();
    if (!resultPermissions) {
      return;
    };
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [16, 9]
    });

    setPickedImage(image.uri);
    onSelectImage(image.uri);
  };

  return (
    <View style={styles.imageSelect}>
      <View style={styles.imagePreview}>
        {pickedImage
          ? <Image style={styles.image} source={{ uri: pickedImage }} />
          : <Text style={styles.text}>No image picked yet!</Text>}
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={handlePickerImage}
      />
    </View>
  );
};

export default SelectImage;
