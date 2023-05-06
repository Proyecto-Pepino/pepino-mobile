import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  CheckBox,
} from "react-native";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2, reset2 } from "../redux/createSlice2";
import { addTodo, completeTodo, deleteTodo } from "../redux/taks1";

const Count = () => {
  const count = useSelector((state) => state.count2);
  const task = useSelector((state) => state.count3);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handlePressReset = () => {
    dispatch(reset2());
  };
  const handlePressAdd = () => {
    console.log("Adding...");
    dispatch(increment2());
  };

  const handlePressSubstract = () => {
    console.log("Substracting...");
    dispatch(decrement2());
  };

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: text,
        })
      );
      setText("");
    }
  };
  const handleComplete =()=>{
    dispatch(completeTodo())
  }

  return (
    <View>
      <View style={styles.viewTop}>
        <Text style={styles.textInput}>{count}</Text>
        <TouchableOpacity
          onPress={handlePressReset}
          style={styles.buttonToCero}
        >
          <Text style={styles.textToCero}>VOLVER A CERO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBotom}>
        <TouchableOpacity onPress={handlePressAdd} style={styles.buttonToCero}>
          <Text style={styles.textToCero}>SUMAR</Text>
        </TouchableOpacity>
        <View style={styles.viewBetween}></View>
        <TouchableOpacity
          onPress={handlePressSubstract}
          style={styles.buttonToCero}
        >
          <Text style={styles.textToCero}>RESTAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTop}>
        <TextInput
          placeholder="Ingrese una tarea"
          value={text}
          onChangeText={setText}
        ></TextInput>
        <Button title="Agregar" onPress={handleAddTodo} />
        <Text>Tareas pendientes:</Text>
        {task.map((item) => (
          <View>
          <Text key={item.id}>{JSON.stringify(item.text)}</Text>
          {item.complete ? (
      <View style={styles.completeButton}>
        <Text style={styles.completeText}>COMPLETE</Text>
      </View>
    ) : (
      <Button title="Completar" onPress={()=>handleComplete(item.id)} />
    )}
          </View>
        ))}
      </View>
      
      <View style={styles.viewTop}>
        <TouchableOpacity style={styles.buttonToCero}>
          <Text style={styles.textToCero}>Marcar Tarea como Completada</Text>
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
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    borderRadius: 20,
  },
  viewBetween: {
    margin: 2,
  },
  textInput: {
    backgroundColor: "#84C888",
    width: "41%",
    margin: 5,
    textAlign: "center",
    height: 30,
  },
  buttonToCero: {
    height: 40,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  textToCero: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 14,
  },
});
