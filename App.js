import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
  };

  if (!fontLoading) return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoading(true)}
    />
  );

  return <AppNavigation />;
}
