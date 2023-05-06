import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/login";
import SearchPage from "./components/search-page";
import Home from "./components/home";
import { Provider } from "react-redux";
import  store  from './redux/reducers/index';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }} /*evita que se renderize el nombre */
          />
          <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
