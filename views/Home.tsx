import React from "react";
import { StyleSheet, View } from "react-native";
import BottomInfo from "../components/BottomInfo";
import MidInfo from "../components/MidInfo";
import TopLogo from "../components/TopLogo";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <TopLogo />
        <MidInfo />
        <BottomInfo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 20,
  },
  border: {
    width: "100%",
    backgroundColor: "black",
    padding: 2,
  },
});
