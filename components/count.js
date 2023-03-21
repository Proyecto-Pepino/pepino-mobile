import { StyleSheet, Text, View,  TextInput ,TouchableOpacity} from "react-native";
import store from "../redux/store";

const Count = () => {
  return (
    <View>
      <View style={styles.viewTop}>
        <TextInput style={styles.textInput} value={store.getState().count}></TextInput>
        <TouchableOpacity style={styles.buttonToCero}><Text style={styles.textToCero} >VOLVER A CERO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBotom}>
      <TouchableOpacity style={styles.buttonToCero}><Text style={styles.textToCero} >SUMAR</Text>
      </TouchableOpacity>
        <View style={styles.viewBetween}></View>
        <TouchableOpacity onPress={()=>console.log(store.getState().count)} style={styles.buttonToCero}><Text style={styles.textToCero} >RESTAR</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  viewTop: {
    marginTop: 30,
   
    alignItems: "center",
    justifyContent: "center",
  },
  viewBotom: {
    display: "flex",
    flexDirection: "row",
    width:'100%',
    marginTop: 20,
    justifyContent:'center',
    borderRadius:20,
     
  },
  viewBetween:{
    margin:2
  },
  textInput: {
    backgroundColor: "#84C888",
    width:'41%',
    margin:5,
    textAlign:'center',
   
  },
  buttonToCero: {
    height: 40,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textToCero:{
    color:'#FFFFFF',
    fontWeight:'500',
    fontSize:14
  }
 
});
