import { StyleSheet, Text, View,  TextInput ,TouchableOpacity} from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset  } from "../redux/createSlice";


const Count = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
 
  const handlePressReset = () =>{
    dispatch(reset())
  }
  const handlePressAdd = () => {
    console.log("Adding...");
    dispatch(increment());

  };
  
  const handlePressSubstract = () => {
    console.log("Substracting...");
    dispatch(decrement());

  };


  return (
    <View>
      <View style={styles.viewTop}>
      <Text style={styles.textInput}>{count}</Text>
        <TouchableOpacity onPress={handlePressReset} style={styles.buttonToCero}><Text style={styles.textToCero} >VOLVER A CERO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBotom}>
      <TouchableOpacity onPress={handlePressAdd} style={styles.buttonToCero}><Text style={styles.textToCero} >SUMAR</Text>
      </TouchableOpacity>
        <View style={styles.viewBetween}></View>
        <TouchableOpacity onPress={handlePressSubstract} style={styles.buttonToCero}><Text style={styles.textToCero} >RESTAR</Text>
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
   height:30
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
