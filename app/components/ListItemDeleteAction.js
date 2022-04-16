import React from 'react';
import {View,StyleSheet,TouchableWithoutFeedback} from "react-native";
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

     <View style={styles.container}>
         <MaterialCommunityIcons name="trash-can-outline" color="white" size={20}/></View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.danger,
        width:70,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default ListItemDeleteAction;