import React from "react";
import { Text, View ,StyleSheet} from 'react-native';


const Offers = ({title})=>{
    return(
        <View>
            
            <View style={stylesOffer.boxOffer}>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

export default Offers;

stylesOffer = StyleSheet.create({
    containerOffer:{
        height: '100%',
    },
    boxOffer:{
        
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E1E1E1",
        height: 110,
        width: 220,
        marginRight: 10,
        marginTop: 10,
    }
}
)