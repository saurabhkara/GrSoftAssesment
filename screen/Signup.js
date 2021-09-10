import React from 'react'
import { View, Text,StatusBar,ImageBackground, StyleSheet,Image,TouchableOpacity} from 'react-native';
import ButtonDesign from '../component/ButtonDesign';

export default function Signup({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            {/* <Image source={require('../assets/signUpImage/signup.png')} style={styles.background} /> */}
            {/* <ImageBackground style={styles.background} source={require("../assets/signUpImage/signup.png")}/> */}
            {/* <View style={styles.container} >
            <ButtonDesign />
            </View> */}
            <Text style={styles.text} >What you think,</Text>
            <Text style={styles.text}>you become. </Text>
            <View style={{marginVertical:10, marginTop:50}} >
             <ButtonDesign dColor={'#CFCFF'} aDesign={'mail'} onPress={()=>navigation.navigate('Login')} />
            </View >
            <View style={{marginVertical:10,marginTop:30}}>
                <ButtonDesign dColor={'#0E66D6'} aDesign={'facebook-square'} onPress={()=>navigation.navigate('Login')}  />    
            </View>
            
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:'center',
        
        flex:1,
    },
    background:{
        width:'100%',
        height:'100%',
        backgroundColor:'transparent',
        
    },
    text:{
        fontSize:28,
        fontWeight:'bold'
    }
})