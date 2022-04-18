import React,{useState} from 'react';
import { TextInput,StyleSheet,View ,Platform,Modal,TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from "../config/styles"
import AppText from './AppText';


function AppPicker({icon,placeholder,...otherProps}) {
    const [modalVisible,setModalVisible]=useState(false)
    return (

      <>
        <TouchableWithoutFeedback onPress={setModalVisible(!modalVisible)}>

        <View style={styles.container}>
{icon && <MaterialCommunityIcons name={icon} size={20} color={colors.secondary} style={styles.icon}/>}
<AppText style={styles.text}>{placeholder}</AppText>  
<MaterialCommunityIcons name="chevron-down" size={20} color={colors.secondary}/>

    </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible}>
            <View style={{backgroundColor:"pink"}}></View>
        </Modal>
      </>
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
    text:{
        flex:1,
    },
  
    icon:{
        marginRight:10,
    }
})

export default AppPicker;