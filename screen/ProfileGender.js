import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Card from '../component/Card';
import ButtonDesign from '../component/ButtonDesign';

export default function ProfileGender({navigation}) {
    const navigateSetupLevel=()=>{
        navigation.navigate('ProfileLevel')
    }
    return (
        <View style={styles.container}>
             <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.headerContainer}> 
                <Text style={styles.header}>What is your gender?</Text>
            </View>
            <Card icon="female-outline" title='Female'/>
            <Card icon="male-outline" title='Male'/>
            <View style={styles.buttonContainer} >
                 <ButtonDesign onPress={navigateSetupLevel} dColor={'#BCFCFF'} tb='continue' />
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
    },
    header:{
        fontSize:28,
        fontWeight:'bold'
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