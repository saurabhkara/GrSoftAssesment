import React from 'react'
import { View,Text, TouchableOpacity ,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function ButtonDesign({dColor,aDesign,tb,onPress}) {

    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:dColor,marginTop:20}]} onPress={onPress} >
            <AntDesign name={aDesign} size={24} color="white" />
            <Text style={styles.text}>{tb}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:45,
        // backgroundColor:'#BCFCFF',
        height:40,
        alignContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        borderRadius:20,
        justifyContent:'center'
    
    },
    text:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'bold', 
        color:'white',
        alignSelf:'center'
    }

})