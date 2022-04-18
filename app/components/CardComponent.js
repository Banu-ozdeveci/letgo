import React from 'react';
import  {View,Text,Image,StyleSheet} from "react-native";
import colors from '../config/colors';
import AppText from './AppText';
 
function CardComponent({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>

            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:15,
        overflow:"hidden",
        margin:5,
        
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:10
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        marginBottom:10
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    }
})
export default CardComponent;