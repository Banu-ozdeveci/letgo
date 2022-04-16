import React from 'react';
import { StyleSheet,View ,FlatList} from 'react-native';
import colors from '../config/colors';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems=[
    {
title:"My Listings",
icon:{
    name:"format-list-bulleted",
    backgroundColor:colors.secondary
}
    },
    
{
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:"pink"
        },
    }
]

function AccountScreen(props) {
    return (
  <Screen style={styles.screen}>
      <View style={styles.container}>
      <ListItem title="Banu Özdeveci" subTitle="programmingwithBanu@gmail.com" image={require("../assets/mosh.jpg")}/>
      </View>

      <View style={styles.container}>
          <FlatList 
          data={menuItems}
          keyExtractor={(item) =>item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item})=>
        <ListItem title={item.title}
    ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
          
          />}/>
      </View>

      <ListItem title="Log Out" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}/>


  </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:30
    },
    screen:{
        backgroundColor:colors.light,
    }
})

export default AccountScreen;