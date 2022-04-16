import React from 'react';
import  {View,Text,Image,StyleSheet} from "react-native";
import colors from '../config/colors';
import AppText from './AppText';
 
function CardComponent({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image source={require(image)}/>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subTitle}</AppText>

        </View>
    );
}


const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:15,
        
    }
})
export default CardComponent;