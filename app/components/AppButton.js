import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from "react-native";
import colors from "../config/colors";

function AppButton({title,onPress,color="pink"}) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>

        
            <Text style={styles.text}>{title}</Text>
        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.pink,
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        margin:5,
        width:"100%",
    },
    text:{
        color:colors.white,
        fontSize:18,
        fontWeight:"bold",
    }
})

export default AppButton;