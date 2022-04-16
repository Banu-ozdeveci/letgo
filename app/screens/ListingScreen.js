import React from 'react';
import CardComponent from '../components/CardComponent';
import {View} from "react-native"

function ListingScreen(props) {
    return (
        <View>

            <CardComponent title="Red Jacket for sale" subTitle="$100" image={require("../assets/chair.jpg")}/>
        </View>
    );
}

export default ListingScreen;