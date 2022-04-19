import React from 'react';
import { View,TouchableOpacity,StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({label,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>

       

            <AppText style={styles.text}>{label}</AppText>
            
    
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:10
    }
    
})

export default PickerItem;