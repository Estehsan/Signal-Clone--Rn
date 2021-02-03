import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItems = ({id,chatName,enterChat}) => {
  return (
    <ListItem onPress={() => enterChat(id,chatName)} key={id} bottomDivider>
      <Avatar
        rounded 
        source={{ uri: "https://www.w3schools.com/w3images/avatar6.png" }}
      />
       <ListItem.Content>
           <ListItem.Title>{chatName} </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">ABC</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  );
};


const styles = StyleSheet.create({});

export default CustomListItems;
