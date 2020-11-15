import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => (
  <HeaderButton
    {...props}
    iconSize={23}
    color="white"
    IconComponent={Ionicons}
  />
);

export default CustomHeaderButton;
