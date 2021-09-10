import React from 'react'
import { View,Text, TouchableOpacity ,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function ButtonDesign({dColor,aDesign,Onpress}) {
        const Dvalue=dColor;
    return (
        <TouchableOpacity style={styles.container} Onpress={Onpress} >
            <AntDesign name={aDesign} size={24} color="white" />
            {aDesign=='mail' ? 
            <Text style={styles.text}>Continue with email</Text>:
            <Text style={styles.text}>Continue with Facebook</Text>
             }
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:45,
        backgroundColor:'#BCFCFF',
        height:40,
        alignContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        borderRadius:20,
    
    },
    text:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'bold', 
        color:'white'
    }

})