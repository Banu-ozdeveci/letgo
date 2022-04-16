import React from 'react';
import {View,StyleSheet,Image, TouchableHighlight} from "react-native";
import AppText from './AppText';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function ListItem({image,title,subTitle,ImageComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>

        <View style={styles.container}>
            {ImageComponent}
         {image &&   <Image style= {styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
              {subTitle &&  <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>

        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:"white",
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center"
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