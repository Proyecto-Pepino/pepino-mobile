import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Discount = ({ promo }) => {
  const [modalDiscVisible, setModalDiscVisible] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalDiscVisible(true);
        }}
      >
        <View style={stylesDisc.containerDisc}>
          <Text style={styles.text}>{promo.discount1}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalDiscVisible}
        animationType="none"
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <View>
          <FontAwesome
            name="angle-left"
            onPress={() => setModalDiscVisible(false)}
            size={40}
            marginLeft={14}
            marginRight={10}
            marginTop={14}
          />
        </View>
        {Object.keys(promo).map((key) => {
          return (
            <View style={stylesDisc.modalDisc}>
              <Text> {key}</Text>
            </View>
          );
        })}
      </Modal>
    </View>
  );
};

export default Discount;

const stylesDisc = StyleSheet.create({
  containerDisc: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E1E1",
    height: 100,
    width: "100%",
  },
  modalDisc: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E1E1",
    height: 100,
    width: "80%",
    marginLeft: "8%",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});
