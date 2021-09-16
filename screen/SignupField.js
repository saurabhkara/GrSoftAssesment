import React from 'react'
import { View, Text, StyleSheet, StatusBar,TextInput} from 'react-native'
import ButtonDesign from '../component/ButtonDesign'

export default function SignupField({navigation}) {
    const navigateWelcome=()=>{
        navigation.navigate('AllowNotification')
    }
    const navigateSetUpName=()=>{
        navigation.navigate('ProfileSetupName')
    }
    return (
        <View>
             <StatusBar barStyle = "dark-content" hidden = {false} translucent backgroundColor="transparent"/>
             <View style={styles.header}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <View styles={styles.fieldConatiner} >
                <View style={styles.firstRow}> 
                    <View > 
                        <Text style={styles.FirstTitle}>First Name</Text>
                        <TextInput placeholder='First Name' />
                        <View style={styles.thinLIne}/>
                    </View>
                    <View >
                        <Text style={styles.FirstTitle}>Last Name</Text>
                        <TextInput placeholder='Last Name' />
                        <View style={styles.thinLIne}/>
                    </View>
                </View>
                <View style={styles.mailTitle}>
                    <Text style={styles.m}>Your Email</Text>
                    <TextInput placeholder='Email' />
                    <View style={styles.thinLIneSEC}/>
            
                    <TextInput style={styles.m} placeholder='Password' />
                    <View style={styles.thinLIneSEC}/>
                </View>
                <ButtonDesign dColor={'#BCFCFF'} tb={'Sign Up'} onPress={navigateSetUpName}/>
                <View style={styles.signUpText} >
                    <Text >By signing up you agree to our Terms of </Text>
                    <Text>Use and Privacy Policy</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
    
        marginHorizontal:28
    },
    header:{
        marginTop:103,
        alignItems:'center'
    },
    headerText:{
        fontSize:28,
        fontWeight:'bold',
    },
    fieldConatiner:{
        marginHorizontal:28,

    },
    firstRow:{
        flexDirection:'row',
        marginHorizontal:28,
        marginTop:70,
       justifyContent:'space-between'

    }, 
    thinLIne:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal:2,
        marginTop:5,
        opacity:0.2,
        width:150,
    },
    mailTitle:{
        marginHorizontal:28,
        marginTop:15,
    },
    thinLIneSEC:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal:2,
        marginVertical:10,
        opacity:0.2,
    },
    m:{
        marginTop:15
    }, 
    signUpText:{
        marginHorizontal:52,
        marginTop:30,
        alignItems:'center',
        opacity:0.5,
    }
})