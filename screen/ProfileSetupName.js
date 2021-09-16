import React from 'react'
import { View, Text, StatusBar,StyleSheet,TextInput } from 'react-native';
import ButtonDesign from '../component/ButtonDesign';


export default function ProfileSetupName({navigation}) {
    const navigateWelcome=()=>{
        navigation.navigate('Welcome')
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.headerConatiner}>
                <Text style={styles.headerText}>What is your name?</Text>
            </View>
            <View style={styles.fieldConatiner}>
                <Text style={styles.mailTitle}>Your Email     :</Text>
                <TextInput placeholder='Email' style={{marginVertical:5}}/>
                <View style={styles.thinLIne} />
            </View>
            <View style={styles.buttonContainer} >
                <ButtonDesign dColor={'#BCFCFF'} tb={'Next'} onPress={navigateWelcome} />
            </View>
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{

    },
    headerConatiner:{
        marginTop:173,
        alignItems:'center',
    
    },
    headerText:{
        fontSize:28,
        fontWeight:'bold'
    },
    fieldConatiner:{
        marginTop:30,
        marginHorizontal:28
    },
    mailTitle:{
        fontSize:11,
    
    },
    thinLIne:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal:2,
        marginTop:5,
        opacity:0.5,
    },
    buttonContainer:{
        marginTop:46,
    }
})