import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GeneralContext from "../context/GeneralContext";

export default function MidInfo() {
  const { name, job, img } = useContext(GeneralContext);

  return (
    <View style={styles.flex}>
      <Image
        source={{
          uri: img,
          width: 100,
          height: 100,
        }}
        style={styles.img}
      />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          {name}
        </Text>
        <Text> {job} </Text>
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 40,
    marginRight: 50,
  },
  flex: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
