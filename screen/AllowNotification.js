import React from 'react'
import { View, Text, StyleSheet, StatusBar,Image,Dimensions } from 'react-native'
import ButtonDesign from '../component/ButtonDesign'

export default function AllowNotification({navigation}) {
    const navigateProfile=()=>{
            navigation.navigate('ProfileSetupName')
    }
    return (
       
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <Image style={styles.image} source={require('../assets/notification/bg.png')} />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome back</Text>
            </View>
            <View style={styles.desc} >
                <Text style={styles.text} >Allow notifications to keep you on track for your</Text>
                <Text style={styles.text}>plan and reach your yoga goals faster!</Text>
            </View>
            <View style={styles.buttonContainer} >
                <ButtonDesign dColor={'#BCFCFF'} tb={'Allow Notification'} onpress={navigateProfile}/>
            </View>
            <Text style={styles.skip}>Skip for now</Text>
           
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{

    },
    image:{
        width:'100%',
        height:Dimensions.get('window').width,
    },
    headerContainer:{
        alignItems:'center',
        marginTop:54,
    },
    header:{
    fontSize:28,
    fontWeight:'bold'
    },
    desc:{
        marginHorizontal:28,
        alignItems:'center',
        marginTop:34,
        padding:5,

    },
    text:{
        opacity:0.5,
        marginTop:2,
    },
    buttonContainer:{
        marginTop:54,
    },
    skip:{
        marginTop:44,
        alignSelf:'center',
        opacity:0.7
    }
})