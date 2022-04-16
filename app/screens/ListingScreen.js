import React from 'react';
import CardComponent from '../components/CardComponent';
import {View,StyleSheet,FlatList} from "react-native"
import Screen from '../components/Screen';

const listings= [
    {
        id:1,
        title:"Red Jacket For Sale",
        price:"$100",
        image: require("../assets/jacket.jpg")
    },
    {
        id:2,
        title:"Red Couch in Great Condition",
        price:"$200",
        image: require("../assets/couch.jpg")
    }
]



function ListingScreen(props) {
    return (
        <Screen>
<FlatList 
data={listings}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=><CardComponent title={item.title} subTitle={item.price} image={item.image}/>}



/>
   
        </Screen>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightgrey",
        flex:1,
    }
})
export default ListingScreen;