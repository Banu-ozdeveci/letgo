import React,{useState} from 'react';
import { TextInput,StyleSheet,View ,FlatList,Button,Platform,Modal,TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from "../config/styles"
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({numberOfColumns=1,icon,items,placeholder,PickerItemComponent=PickerItem,selectedItem,onSelectItem}) {
    const [modalVisible,setModalVisible]=useState(false)
    return (

      <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>

        <View style={styles.container}>
{icon && <MaterialCommunityIcons name={icon} size={20} color={colors.secondary} style={styles.icon}/>}
{selectedItem ?              <AppText style={styles.text}>{selectedItem }</AppText>
     :      <AppText style={styles.placeholder}>{placeholder }</AppText>
    }

<MaterialCommunityIcons name="chevron-down" size={20} color={colors.secondary}/>

    </View>
        </TouchableWithoutFeedback>
        <Modal animationTyoe="slide" visible={modalVisible}>
            <Screen>


           <Button title="close" onPress={()=>setModalVisible(false)}/>
           <FlatList
           numColumns={numberOfColumns}
           data={items}
           keyExtractor={item=>item.value.toString()}
           renderItem={({item})=>(<PickerItemComponent item={item} label={item.label}
           onPress={()=>{setModalVisible(false); onSelectItem(item)}}
           />)}/>
            </Screen>
        </Modal>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:20,
        flexDirection:"row",
        marginVertical:10,
        padding:5,
        width:"100%",
        alignItems:"center",
        marginHorizontal:10,
    },
    text:{
        flex:1,
    },
  
    icon:{
        marginRight:10,
    },
    placeholder:{
        color:defaultStyles.colors.medium,
        flex:1,
    }
})

export default AppPicker;