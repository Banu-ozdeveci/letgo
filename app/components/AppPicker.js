import React from 'react';
import { TextInput,StyleSheet,View ,Platform} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from "../config/styles"
import AppText from './AppText';


function AppPicker({icon,placeholder,...otherProps}) {
    return (
        <View style={styles.container}>
{icon && <MaterialCommunityIcons name={icon} size={20} color={colors.secondary} style={styles.icon}/>}
<AppText>{placeholder}</AppText>      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:20,
        flexDirection:"row",
        marginVertical:10,
        padding:5,
        width:"100%",
        alignItems:"center",
        marginHorizontal:10,
    },
  
    icon:{
        marginRight:10,
    }
})

export default AppPicker;