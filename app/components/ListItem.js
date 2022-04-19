import React from 'react';
import {View,StyleSheet,Image, TouchableHighlight} from "react-native";
import AppText from './AppText';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({image,title,subTitle,ImageComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>

        <View style={styles.container}>
            {ImageComponent}
         {image &&   <Image style= {styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText  numberOfLine={1} style={styles.title}>{title}</AppText>
              {subTitle &&  <AppText numberOfLine={2} style={styles.subTitle}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>

        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        alignItems:"center",
        backgroundColor:"white",
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center",
        flex:1

    },
        image:{
            width:70,
            height:70,
            borderRadius:35,
        },
        title:{
            fontWeight:"500"
        },
        subTitle:{
            color:colors.medium
        }
})

export default ListItem;