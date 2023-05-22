import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

const Product = ({ route }) => {
  const { productData } = route.params;
  
  const [sellData, setSellData] = useState({
    amount: 1,
    price: productData.price,
  });
  const [priceAmount, setPriceAmount] = useState(productData.price);

  const HandlerSellAdd = () => {
    setSellData({ ...sellData, amount: sellData.amount + 1 });
  };

  const HandlerSellSustract = () => {
    if (sellData.amount > 0) {
      setSellData({ ...sellData, amount: sellData.amount - 1 });
    }
  };

  const handlePrice = (amount, price) => {
    
    let result = amount * price;

    return result;
  };

  useEffect(() => {
    

    setPriceAmount(handlePrice(sellData.amount, sellData.price));
    console.log(priceAmount)
  }, [sellData]);

  const handleButton = () => {
    console.log("Button Press");
  };
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

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={stylesProduct.addQuantity}>
          <AntDesign
            name="minus"
            size={24}
            color="black"
            onPress={HandlerSellSustract}
          />
          <Text style={{ marginLeft: 20, marginRight: 20 }}>
            {sellData.amount}
          </Text>
          <Entypo
            name="plus"
            size={24}
            color="black"
            onPress={HandlerSellAdd}
          />
        </View>
        <View style={{ width: "60%" }}>
          <View style={{ marginTop: 22 }}>
            <TouchableOpacity
              title={` Agregar  ${priceAmount}`}
              disabled
              onPress={() => {
                handleButton();
              }}
              style={stylesProduct.buttonAdd}
            >
              <Text style={{ color: "white" }}>Agregar </Text>
              <Text style={{ color: "#ffffff" }}>$ {priceAmount}</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  addQuantity: {
    alignSelf: "flex-start",
    borderColor: "black",
    padding: 10,
    height: 50,
    flexDirection: "row",
    marginTop: 22,
    borderWidth: 0.8,
    borderRadius: 10,
  },
  buttonAdd: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 20,
    height: 50,
    backgroundColor: "#A9A7A7",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
