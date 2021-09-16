import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import Logo from './../assets/welcome/Vector.png';
import ButtonDesign from '../component/ButtonDesign';

export default function Welcome({navigation}) {
    const navigateGender=()=>{
        navigation.navigate('ProfileGender')
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome to YogiX,</Text>
                <Text style={styles.header}>Joey!</Text>
            </View>
            <View style={styles.imageContainer}>
                 <Image style={{resizeMode:'contain'}}source={Logo}/>
            </View>
            <View style={styles.descContainer}> 
                <Text style={styles.desc}>Allow notifications to keep you on track for your plan and reach 
                    your yoga goals faster!</Text>
            </View>

            <View style={styles.buttonContainer} >
                <ButtonDesign dColor={'#BCFCFF'}  tb={'Allow Notification'} onPress={navigateGender}></ButtonDesign> 
            </View>
            <TouchableOpacity > 
                <Text style={styles.skip}>Skip for now</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E9F4FF'
    },
    header:{
      fontSize:28,
      fontWeight:'bold'

    },
    headerContainer:{
        alignItems:'center',
        marginTop:100,
    },
    imageContainer:{
        alignItems:'center',
        marginTop:50
    },
    descContainer:{
        alignItems:'center',
        marginTop:40,
        marginHorizontal:25,
        paddingBottom:20,
        marginBottom:30,
        paddingHorizontal:10,

    },
    desc:{
       textAlign:'center',
       fontSize:14,
       

    },
    buttonContainer:{
        marginVertical:20
    },
    skip:{
        textAlign:'center',
        opacity:0.7,
        marginTop:20
    }
})