import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";
const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <Button label="Choose a photo" />
      <Button label="Use this photo" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
