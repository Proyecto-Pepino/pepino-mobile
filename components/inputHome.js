import React from "react";
import { View, StyleSheet, TextInput, Modal } from "react-native";
import { Chip } from "react-native-paper";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const InputHome = ({ chipData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState("");
  const handleInputChange = (event) => {
    setData(event);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={data}
        onChangeText={handleInputChange}
        style={styles.input}
        placeholder={"Buscar Productos"}
        onFocus={() => setModalVisible(true)}
      ></TextInput>
      <FontAwesome name="search" size={15} style={styles.icon}></FontAwesome>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Modal
          visible={modalVisible}
          animationType="slide"
          style={styles.modalStyle}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="angle-left"
              onPress={() => setModalVisible(false)}
              size={40}
              marginLeft={14}
              marginRight={10}
              marginTop={14}
            />
            <TextInput
              value={data}
              onChangeText={handleInputChange}
              style={styles.inputModal}
              placeholder={"Buscar Productos"}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", flexWrap:'wrap' }}>
            {chipData.map((key) => (
              <Chip style={styles.chipStyle}> {key}</Chip>
            ))}
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default InputHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    height: "100%",
  },
  input: {
    width: 330,
    height: 60,

    paddingLeft: 40,
    borderWidth: 1,
    borderColor: "#8F8E8E",
    borderRadius: 30,
    fontSize: 16,
  },
  inputModal: {
    width: 330,
    height: 30,
    marginTop: 20,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: "#8F8E8E",
    borderRadius: 30,
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    right: 30,
    color: "#8F8E8E",
  },
  modalStyle: {
    flexDirection: "row",
  },
  chipStyle: {
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 30,
    backgroundColor: "#ffffff",
    borderWidth: 1,
  },
});
