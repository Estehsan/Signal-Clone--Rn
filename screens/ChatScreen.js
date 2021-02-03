import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
const ChatScreen = ({navigation,route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:() => (
                <View style={{flexDirection:'row',alignItems:'center'}}>

                    <Avatar rounded source={{uri:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}}/>
                    <Text>{route.params.chatName}</Text>
                </View>

            ),
            headerRight:()=>(<View style={{flexDirection:'row',justifyContent:'space-between',width:70,marginRight:20}}><Feather name="phone-call" size={24} color="white" />
            <Feather name="video" size={24} color="white" />
</View>)
        });
    }, []);
    return (
        <View>
            {
            console.log(route.params)

            }
            <Text>{route.params.chatName} </Text>
            <Text>{route.params.id} </Text>


        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
