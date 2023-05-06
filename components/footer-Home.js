import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FooterHome = () => {
  return (
    <View className="footer-home" style={StylesFooterHome.containerFooter}>
      <Text>Nuestra Dirección</Text>
      <View style={StylesFooterHome.footerBoxStyle}>
        <Text style={StylesFooterHome.footerDownText}> Av. Córdoba 45, Posadas Pcia de Misiones </Text>
      </View>
    </View>
  );
};

export default FooterHome;

const StylesFooterHome = StyleSheet.create({

    containerFooter: {
        marginTop: 25,
        
    },

  footerUpText: {  
    alignItems: "start",
  },
  footerBoxStyle: {
    backgroundColor:'#E1E1E1',
    height:30,
    width:'100%',
    borderRadius:10,
    marginTop:10,
},
    footerDownText: {
        textAlign: "center",
        paddingTop:5,
    },
}
);
