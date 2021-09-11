import React from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput,} from 'react-native'
import ButtonDesign from '../component/ButtonDesign'

export default function ResetPassowrd() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
             <View style={styles.header}>
                <Text style={ styles.headerText}>Reset password</Text>
            </View>
            <View style={styles.descContainer}> 
                <Text>Enter your email to receive the instruction </Text>
                <Text >to reset your password</Text>
            </View>
            <View style={styles.feildConatiner}>
                <Text style={styles.mailTitle}>Your Email     :</Text>
                <TextInput placeholder='Email' />
                <View style={styles.thinLIne}/>
            </View>
            <ButtonDesign dColor={'#BCFCFF'} tb={'Send me now'}/>
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        
    },
    header:{
        marginTop:103,
        alignItems:'center'
    },
    headerText:{
        fontSize:28,
        fontWeight:'bold',
       
      
    },
    descContainer:{
        marginHorizontal:55,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        opacity:0.5,
    },
    feildConatiner:{
        marginHorizontal:29,
        marginTop:30,
    },
    mailTitle:{
        fontSize:11,
        opacity:0.7,
        marginBottom:5
    },
     thinLIne:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal:2,
        marginTop:5,
        opacity:1,
        marginBottom:45,
    }

})