import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { auth, db } from "./db/firebase";
import HomeScreen from "./HomeScreen";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  // nfn
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setEmail("");
        setPassword("");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>LoginScreen hai ye </Text>
      <Image
        source={{
          uri:
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c535.png",
        }}
        style={{ height: 200, width: 400 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          type='email'
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button onPress={signIn} containerStyle={styles.btn} title="Login" />
      <Button
        onPress={() => navigation.navigate("RegisterScreen")}
        containerStyle={styles.btn}
        title="Register"
        type="outline"
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
  },
  btn: {
    marginTop: 10,
    width: 200,
  },
});

export default LoginScreen;
