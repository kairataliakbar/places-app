import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => (
  <HeaderButton
    {...props}
    iconSize={23}
    color={Colors.primary}
    IconComponent={Ionicons}
  />
);

export default CustomHeaderButton;
