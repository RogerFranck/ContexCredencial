import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GeneralState from "./context/GeneralState";
import Home from "./views/Home";

export default function App() {
  return (
    <GeneralState>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </GeneralState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
