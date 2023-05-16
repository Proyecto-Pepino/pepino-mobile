import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MerchandiseGroup = ({ title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerMerch}
      onPress={() => 
        navigation.navigate("Search")
      }
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MerchandiseGroup;

styles = StyleSheet.create({
  containerMerch: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E1E1E1",
    height: 160,
    width: "31%",

    borderRadius: 10,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
  },
});
