import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';
import { db } from "./db/firebase";
const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add New Chat",
      headerBackTitle: "Go back to home",
    });
  }, [navigation]);


  const createChat = async () => {
      await db.collection('chats').add({
          chatName: input
      }).then(()=>{
          navigation.goBack();
      }).catch((error) => alert(error))
      
  }
  


  return (
    <View>
      <Text>Add Chat is</Text>
      <Input
        placeholder="Enter a name"
        onChangeText={(text) => setInput(text)}
        LeftIcon={<FontAwesome name="wechat" size={24} color="black" /> }
           />
      <Button onPress={createChat} title="Enter ti"/>
      
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({});
