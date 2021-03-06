import React from 'react';
import AppText from '../AppText';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

function ErrorMessage({error,visible}) {
    if (!error || !visible) return null;
    return (
       <AppText style={styles.text}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    text:{
        color:colors.danger,
    }
    
})

export default ErrorMessage;