import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image} from 'react-native';
import Card from '../component/Card';
import ButtonDesign from '../component/ButtonDesign';
import BG from '../assets/ProfilePain/BG.png';
import body from '../assets/ProfilePain/body.jpg'

export default function ProfilePains({navigation}) {
    const navigateGoal=()=>{
        navigation.navigate('ProfileGoal')
    }
    return (
        <View style={styles.container}>
             <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.headerContainer}> 
                <Text style={styles.header}>Are you experiencing any pain?</Text>
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.desc}>If you have any injuries or chronic pain, select them by clicking on the problem areas.</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={body} style={styles.image}/>
            </View>
            <View style={styles.buttonContainer} >
                 <ButtonDesign onPress={navigateGoal} dColor={'#BCFCFF'} tb='continue' />
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
        backgroundColor:'white'
    },
    headerContainer:{
        marginTop:140,
        alignItems:'center',
      
        marginHorizontal:35,
    },
    header:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
    },
    descContainer:{
        marginHorizontal:55,
        marginTop:20,
    },
    desc:{
        textAlign:'center',
        fontSize:13,
    },
    buttonContainer:{
        marginTop:25
    },
    imageContainer:{
        
        alignItems:'center',
        marginTop:30
    },
    image:{
        width:175,
        height:320,
        resizeMode:'contain',
    },
    skip:{
        textAlign:'center',
        opacity:0.7,
        marginTop:25
    }
})