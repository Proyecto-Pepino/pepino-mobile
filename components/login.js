import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import Home from "./home";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "566934023458-gtif6v6bhtpl5r9pig39nu0u54ncfc13.apps.googleusercontent.com",
    androidClientId:
      "566934023458-64p34b1jlis3euaunir6sqgm6qpjbr9r.apps.googleusercontent.com",
    iosClientId:
      "566934023458-ic2hhru1oghhcksnvvka9i9nbm1h6dj0.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
      console.log(response);
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
      console.log(user.email);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {userInfo === null ? (
        <SafeAreaProvider style={styles.buttonContainer}>
          <Button
            title="Sign in with Google"
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
          />
        </SafeAreaProvider>
      ) : (
        <SafeAreaProvider>
          <Home style={styles.containerLoggin} />
        </SafeAreaProvider>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  containerLoggin: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
