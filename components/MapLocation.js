import React from "react";
import {
  TouchableOpacity, TouchableNativeFeedback, View, Image, StyleSheet, Platform,
} from "react-native";

const styles = StyleSheet.create({
  mapLocationTouchable: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

const MapLocation = ({ location, children, style, onPress }) => {
  const TouchableComp = Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <TouchableComp style={styles.mapLocationTouchable} onPress={onPress}>
      <View style={style}>
        {location ? (
          <Image
            source={{ uri: "https://1.bp.blogspot.com/-4BNREC0Jojo/VGo7ahW35wI/AAAAAAAABAc/9thZl94F6fY/s1600/GMS%2B-%2BRelease%2BBlog%2BNacho%2B-%2BMap%2BToolbar.png" }}
            style={styles.image}
          />
        ) : children}
      </View>
    </TouchableComp>
  );
};

export default MapLocation;
