import React from 'react'
import { View, Text,StatusBar } from 'react-native'

export default function Login({navigation}) {
    return (
        <View>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <Text>Login</Text>
        </View>
    )
}
