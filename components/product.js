import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

const Product = ({ route }) => {
  const { productData } = route.params;

  const navigation = useNavigation();
  return (
    <ScrollView style={stylesProduct.container}>
      <View style={stylesProduct.headerIcons}>
        <View>
          <FontAwesome
            name="angle-left"
            onPress={() => navigation.navigate("Search")}
            size={40}
          />
        </View>

        <View style={stylesProduct.shopIcon}>
          <MaterialIcons name="add-shopping-cart" size={24} color="black" />
        </View>
      </View>
      <View style={stylesProduct.imageProduct}></View>
      <View style={stylesProduct.dataProduct}>
        <Text style={{ fontSize: 20 }}>{productData.name}</Text>
        <Text style={{ fontSize: 30, marginTop: 10 }}>{productData.price}</Text>
        <Text style={{ marginTop: 5, fontWeight: "400" }}>Precio por Kg.</Text>
      </View>
      <View style={stylesProduct.inputViewProduct}>
        <Text> ¿Querés aclarar algo?</Text>
        <TextInput
          multiline={true}
          numberOfLines={6}
          style={stylesProduct.inputProduct}
          
  placeholderTextColor="#bfbfbf"
        ></TextInput>
      </View>
    </ScrollView>
  );
};

export default Product;

const stylesProduct = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 30,
    backgroundColor: "#ffffff",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 25,
  },
  shopIcon: {
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    fontSize: 16,
  },
  imageProduct: {
    height: 220,
    width: "100%",
    borderWidth: 0.6,
    borderColor: "black",
    borderRadius: 10,
  },
  dataProduct: {
    marginTop: 30,
  },
  inputViewProduct: {
    marginTop: 30,
  },
  inputProduct: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#8F8C8C",
    borderRadius: 10,
  },
});
