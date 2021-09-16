import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Card({icon, title}) {
    return (
       <TouchableOpacity style={styles.card} >
           <Ionicons style={styles.icon} name={icon} size={37} color="#BCFCFF" />
           <Text style={styles.text} >{title}</Text>
       </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor:'red',
        marginHorizontal:27,
        marginTop:25,
        backgroundColor:'#F9FCFF',
        elevation:3,
        height:70,
        borderRadius:10,   
    },
    icon:{
        marginVertical:10,
        marginHorizontal:30,

    },
    text:{
        fontSize:15,
        alignSelf:'center',
        fontWeight:'600',
        marginLeft:25,
    }
})