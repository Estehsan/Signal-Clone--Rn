import React from 'react'
import { StyleSheet,View, Text } from 'react-native'
import { Image } from 'react-native-elements'

const LoginScreen = () => {
    return (
        <View>
            <Text>LoginScreen hai ye </Text>
            <Image
              source={{uri:'https://assets.stickpng.com/images/580b57fcd9996e24bc43c535.png'}}
              style={{height:200,width:400}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default LoginScreen
