import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert} from 'react-native';
import Card from '../component/Card';
import ButtonDesign from '../component/ButtonDesign';

export default function ProfileGoal({navigation}) {
    const navigateCamera=()=>{
        navigation.navigate('CameraAccess')
    }
    return (
        <View style={styles.container}>
             <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.headerContainer}> 
                <Text style={styles.header}>What are your yoga {"\n"}goals?</Text>
            </View>
            <Card icon="body-outline" title='Increase flexibility'/>
            <Card icon="body-outline" title='Improve alignment'/>
            <Card icon="body-outline" title='Lose weight'/>
            <Card icon="body-outline" title='Build muscle'/>
            <Card icon="body-outline" title='Stay healthy'/>
            <View style={styles.buttonContainer} >
                 <ButtonDesign onPress={navigateCamera} dColor={'#BCFCFF'} tb='continue' />
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
        marginTop:120,
        alignItems:'center',
        
    },
    header:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center'
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