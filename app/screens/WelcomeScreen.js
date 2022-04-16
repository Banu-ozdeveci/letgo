import React from 'react';
import { ImageBackground,StyleSheet, View ,Image,Text} from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
       <ImageBackground blurRadius={0.5} style={styles.background} source={require("../assets/background.jpg")}>
           <View style={styles.logoContainer}>

           <Image style={styles.logo} source={require("../assets/logo.png")}/>
           <AppText style={styles.text}>Sell What You Don't Need</AppText>
           </View>
           <View style={styles.buttonContainer}>

<AppButton title="Login" onPress={()=>console.log("button tapped")}/>      
<AppButton title="Register" color="secondary" onPress={()=>console.log("button tapped")}/>      
           </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttonContainer:{
        width:"90%",
        margin:20,
    },
    
    logo:{
        width:100,
        height:100,
        borderRadius:20
    },
    logoContainer:{
        position:"absolute",
        top:50,
        alignItems:"center",

    },
   
    text:{
        color:"black",
        top:18,
        fontWeight:"600",
    }
    
})

export default WelcomeScreen;