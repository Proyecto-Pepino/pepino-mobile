import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import InputHome from "./inputHome";
import Discount from "./discount";
import MerchandiseGroup from "./merchandise-group";
import { FontAwesome } from "@expo/vector-icons";
import Offers from "./offers";
import NewAdquisition from "./new-adquisitions";
import FooterHome from "./footer-Home";
import { useSelector } from "react-redux";

const DiscountsPromos = {
  discount1: "Descuento 1",
  discount2: "Descuento 2",
};

const familias = {
  frutasAndVerduras: "Frutas y Verduras",
  carniceria: "Carnicería",
  carnes: "Carnes",
  galletitas: "Galletitas",
  bebidas: "Bebidas",
  lacteos: "Lácteos",
};

const newAdquisition = {
  adquisition1: "coca con café x250ml",
  adquisition2: "galletitas koki x500g",
  adquisition3: "alcohol frau x500ml",
};

const Home = ({ navigation }) => {
  const productos = useSelector((state) => state.familyProducts);
  const ofertas = useSelector((state) => state.offerProducts);
  const adquisiciones = useSelector((state) => state.newadquisitions);

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={styles.menu}>
        <FontAwesome name={"bars"} />
        <Text style={styles.textAdress}>Lopez y planes 1900</Text>
      </View>
      <InputHome chipData={productos} />
      
      <Discount promo={DiscountsPromos} />
      <View style={styles.MerchandiseRow}>
        {Object.keys(productos).map((key) => (
          <MerchandiseGroup
            navigation={navigation}
            key={key}
            title={productos[key]}
          />
        ))}
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.text}>Lo mejor en Ofertas</Text>
        <ScrollView horizontal={true} style={styles.OffersStyle}>
          {Object.keys(ofertas).map((key) => (
            <Offers key={key} title={ofertas[key]} />
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.text}>Novedades</Text>
        <ScrollView horizontal={true} style={styles.OffersStyle}>
          {Object.keys(newAdquisition).map((key) => (
            <NewAdquisition key={key} title={newAdquisition[key]} />
          ))}
        </ScrollView>
      </View>
      <FooterHome />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    marginTop: 50,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  textAdress: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 20,
    fontSize: 20,
  },
  iconStyle: {
    marginBottom: 5,
  },
  MerchandiseRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  OffersStyle: {
    height: "auto",
    flexDirection: "row",
    overflow: "scroll",
  },
  text: {
    fontSize: 20,
  },
});
