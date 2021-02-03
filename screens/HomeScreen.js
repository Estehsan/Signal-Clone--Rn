import React, { useEffect, useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import CustomListItems from "../components/CustomListItems";
import { Avatar } from "react-native-elements";
import { auth, db } from "../screens/db/firebase";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .onSnapshot((snapshot) =>
        setChats(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "ChatApp",
      headerLeft: () => (
        <View style={{ marginLeft: 15 }}>
          {/* auth?.currentUser?.imageUrl */}
          <TouchableOpacity onPress={signOutUser}>
            <Avatar
              rounded
              source={{
                uri:
                  "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            width: 90,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <FontAwesome5 name="pencil-alt" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", { id: id, chatName: chatName });
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItems
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
