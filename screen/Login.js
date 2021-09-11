import React from 'react'
import { View, Text,StatusBar,StyleSheet, TextInput,onpress } from 'react-native';
import ButtonDesign from '../component/ButtonDesign';

export default function Login({navigation}) {
    const navigateSignup=()=>{
        navigation.navigate('SignupField')
    }
    const navigateForget=()=>{
        navigation.navigate('ResetPassword')
    }
    return (
        <View style={styles.conatiner}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={ styles.headerText}>Log in</Text>
            </View>
                <View style={styles.fieldContainer}> 
                    <Text style={styles.mailTitle}>Your Email     :</Text>
                    <TextInput placeholder='Email' />
                    <View style={styles.thinLIne}/>
                    <TextInput placeholder='Password' style={{marginTop:32}} />
                    <View style={styles.thinLIne}/>
                    <Text onPress={navigateForget} style={{position:'absolute',right:15, top:130, opacity:0.4}}>Forgot password?</Text>
                </View>
                <View style={styles.buttonConatiner}>
                <ButtonDesign dColor={'#BCFCFF'} aDesign={'mail'} tb={'Continue with Email'} onpress={navigateSignup}/>
                <Text 
                style={{marginHorizontal:50, opacity:0.4, marginTop:15}}
                >-------------------------------- or ----------------------------------</Text>
                <ButtonDesign dColor={'#252529'} aDesign={'apple-o'} tb={'Continue with Apple'} />
                <ButtonDesign dColor={'#2C70DA'} aDesign={'facebook-square'} tb={'Continue with Facebook'}></ButtonDesign> 
                </View>
        </View>
    )
}
const styles= StyleSheet.create({
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
fieldContainer:{
    marginHorizontal:28,
    marginTop:60,
},
mailTitle:{
    fontSize:11,

},
thinLIne:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal:2,
    marginTop:5,
    opacity:0.2,
},buttonConatiner:{
    marginTop:40,
}
})