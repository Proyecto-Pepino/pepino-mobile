import React from "react";
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const fontDirectory = `${FileSystem.cacheDirectory}fonts/`;
const fontFileName = "font.ttf";
const fontFileUri = `${fontDirectory}${fontFileName}`;

const downloadFont = async () => {
  try {
    // Asegurarse de que el directorio exista
    await FileSystem.makeDirectoryAsync(fontDirectory, { intermediates: true });

    // Verificar si el archivo ya existe
    const fileInfo = await FileSystem.getInfoAsync(fontFileUri);
    if (!fileInfo.exists) {
      // Descargar el archivo
      const { uri } = await FileSystem.downloadAsync(
        "http://example.com/font.ttf",
        fontFileUri
      );

      console.log("Archivo descargado en:", uri);
    } else {
      console.log("Archivo ya existe en:", fontFileUri);
    }
  } catch (error) {
    console.error(error);
  }
};

downloadFont();

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <View
    style={{
      flex: 1,
      height: 620,
    }}
  >
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen name="Frutas y Verduras" component={Screen1} />
      <Tab.Screen name="Pestaña 2" component={Screen2} />
      <Tab.Screen name="Pestaña 3" component={Screen3} />
    </Tab.Navigator>
  </View>
);

function Screen1() {
  const productos = useSelector((state) => state.product);
  const navigation = useNavigation();
  const showProduct = (productData) => {

    navigation.navigate('Product', { productData });
   
  }
  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: 20,
          backgroundColor: "#ffffff",
        }}
        
      >
        {productos.fruits.map((productData) => (
          <TouchableOpacity style={stylesSearchPage.productArray} onPress={() => showProduct(productData)}>
            <View
              style={{
                height: 63,
                alignItems: "flex-end",
                padding: 10,
              }}
              
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 50,
                }}
              >
                <Ionicons name="add" size={40} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                flexDirection: "row",
                padding: 10,
              }}
            >
              <View>
                <Text>{productData.price}</Text>
                <Text>{productData.name}</Text>

                <Text style={{ fontWeight: "450", fontSize: 10 }}>
                  Precio por kg
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pestaña 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pestaña 3</Text>
    </View>
  );
}

const SearchPage = () => {
  const handleSearchInput = (event) => {
    SetDataSearch(event);
  };
  const navigation = useNavigation();
  const productos = useSelector((state) => state.product);

  ;

  return (
    <>
      <SafeAreaProvider style={{ backgroundColor: "white" }}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={stylesSearchPage.container}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="angle-left"
                onPress={() => navigation.navigate("Login")}
                size={40}
                marginRight={15}
                marginTop={-5}
                marginLeft={-15}
              />
              <View style={stylesSearchPage.searchViewInput}>
                <TextInput
                  onChangeText={handleSearchInput}
                  placeholder="Buscar Productos"
                  placeholderTextColor={"#616161"}
                ></TextInput>

                <FontAwesome
                  name="search"
                  size={15}
                  style={stylesSearchPage.iconSearchPage}
                ></FontAwesome>

                <View style={stylesSearchPage.addIconView}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <TabNavigator></TabNavigator>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
};

export default SearchPage;

const stylesSearchPage = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: "20%",
    marginLeft: "10%",
  },

  searchViewInput: {
    width: 250,
    height: 30,

    paddingLeft: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    fontSize: 16,

    flexDirection: "row",
  },
  addIconView: {
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    fontSize: 16,
  },
  iconSearchPage: {
    marginLeft: "30%",
    marginTop: 5,
  },
  productArray: {
    height: 180,
    width: "47%",
    marginBottom: 20,

    backgroundColor: "#E1E1E1",
    borderRadius: 10,
  },
});
