import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity,onPress} from 'react-native';
import Card from '../component/Card';
import ButtonDesign from '../component/ButtonDesign';

export default function ProfileLevel({navigation}) {
    const navigatePain=()=>{
        navigation.navigate('ProfilePains')
    }
    return (
        <View style={styles.container}>
             <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.headerContainer}> 
                <Text style={styles.header}>What is your level in your practice?</Text>
            </View>
            <Card icon="layers-outline" title='Beginner'/>
            <Card icon="layers-outline" title='Intermediate'/>
            <Card icon="layers-outline" title='Advanced'/>
            <View style={styles.buttonContainer} >
                 <ButtonDesign onPress={navigatePain} dColor={'#BCFCFF'} tb='continue' />
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
    buttonContainer:{
        marginTop:25
    },
    skip:{
        textAlign:'center',
        opacity:0.7,
        marginTop:25
    }
})