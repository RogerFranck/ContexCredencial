import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import GeneralContext from "../context/GeneralContext";
import Label from "./General/Label";

export default function BottomInfo() {
  const { IdNo, DOB, JoinDate, ExpireDate, Web, Phone } =
    useContext(GeneralContext);
  return (
    <View style={styles.bgWhite}>
      <View>
        <Label tittle="ID No" description={IdNo} />
        <Label tittle="D.O.B" description={DOB} />
      </View>
      <View>
        <Label tittle="Joined Date" description={JoinDate} />
        <Label tittle="Expire Date" description={ExpireDate} />
      </View>
      <View>
        <Label tittle="Web" description={Web} />
        <Label tittle="Phone" description={Phone} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
});
