import React from 'react';
import {View, Image,StyleSheet} from "react-native";
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
       <View style={styles.container}>
           <Image style= {styles.image} source={require("../assets/jacket.jpg")}/>
           <View style={styles.detailsContainer}>

           <AppText style={styles.title}>Red Jacket For Sale</AppText>
           <AppText style={styles.subTitle}>$100</AppText>
           <View style={styles.userContainer}>

           <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listing"/>
           </View>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:10,
        margin:5,
    },
    image:{

        width:"100%",
        height:300,
    },
    title:{
        fontWeight:"500",
        fontSize:24,
    },
    subTitle:{
        color:colors.secondary,
        fontSize:20,
        fontWeight:"bold",
    },
    container:{
flex:1,
paddingVertical:20
    },
    userContainer:{
        marginVertical:40
    }
})

export default ListingDetailsScreen;