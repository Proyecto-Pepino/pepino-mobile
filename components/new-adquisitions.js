import React from "react";
import { Text, View ,StyleSheet} from 'react-native';


const NewAdquisition = ({title})=>{
    return(
        <View>
            
            <View style={stylesAdquisition.boxAdquisition}>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

export default NewAdquisition;

stylesAdquisition = StyleSheet.create({
    containerAdquisition:{
        height: '100%',
    },
    boxAdquisition:{
        
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