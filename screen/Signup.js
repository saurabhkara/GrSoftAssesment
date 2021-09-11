import React from 'react'
import { View, Text,StatusBar,ImageBackground, StyleSheet,} from 'react-native';
import ButtonDesign from '../component/ButtonDesign';

export default function Signup({navigation}) {

    const navigateSignup=()=>{
        navigation.navigate('SignupField')
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
            <ImageBackground style={styles.background} source={require("../assets/signUpImage/signup.png")}>
              
                <Text title='Login in' onPress={()=>navigation.navigate('Login')} style={styles.text}>Login </Text>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>What you think,</Text>
                    <Text style={styles.titleText} >you become.</Text>
                </View>
                <View style={styles.descConatiner}>  
                    <Text style={styles.descText} >Sign up to supercharge your</Text>
                    <Text style={styles.descText}> practice.</Text>
                </View>

                <ButtonDesign  dColor={'#BCFCFF'} aDesign={'mail'} tb={'Email'} />

                <View style={styles.thinLIne}/>
                <ButtonDesign dColor={'#252529'} aDesign={'apple-o'} tb={'Apple'} onPress={navigateSignup}/>
                <ButtonDesign dColor={'#2C70DA'} aDesign={'facebook-square'} tb={'Facebook'}></ButtonDesign> 
            </ImageBackground>   
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        width:'100%',
        height:'100%',
        backgroundColor:'transparent',
        flex:1
        
    },
    text:{

        fontSize:15,
        fontWeight:'bold',
        position:'absolute',
        top:65,
        right:19,
    },
    titleContainer:{
        alignItems:'center',
        marginTop:155,
    },
    titleText:{
        fontSize:28,
        fontWeight:'bold'
    },
    descConatiner:{
        alignItems:'center',
        marginTop:30,
    },
    descText:{
        fontSize:15,
    },
    thinLIne:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal:60,
        marginTop:20,
        opacity:0.5,
    }
})