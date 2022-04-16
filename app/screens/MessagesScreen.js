import React from 'react';
import {View,FlatList,StyleSheet} from "react-native";
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const messages=[
    {
        id:1,
        title:'T1',
        description:"D1",
        image:require("../assets/mosh.jpg")
    },
    {
        id:2,
        title:'T2',
        description:"D2",
        image:require("../assets/mosh.jpg")
    },]

function MessagesScreen(props) {
    return (
        <Screen>

            <FlatList 
            data={messages} 
            keyExtractor={message =>message.id.toString()}
            renderItem={({item,}) => <ListItem renderRightActions={ListItemDeleteAction} onPress={()=>console.log("tapped",id)} image={item.image} title={item.title} subTitle={item.description}/>}
            ItemSeparatorComponent={ListItemSeparator}/>
            
        </Screen>
    );
}
const styles = StyleSheet.create({
    
})

export default MessagesScreen;