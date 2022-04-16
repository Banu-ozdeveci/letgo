import React from 'react';
import CardComponent from '../components/CardComponent';
import {View,StyleSheet} from "react-native"

function ListingScreen(props) {
    return (
        <View style={styles.container}>

            <CardComponent title="Red Jacket for sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
            <CardComponent title="Couch for sale" subTitle="$100" image={require("../assets/couch.jpg")}/>

        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightgrey",
        flex:1,
    }
})
export default ListingScreen;