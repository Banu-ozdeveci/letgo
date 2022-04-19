import React,{useState} from 'react';
import { StyleSheet,Image } from 'react-native';
import Screen from '../components/Screen';


import * as Yup from "yup"

import {AppForm,AppFormField,SubmitButton} from "../components/forms"


const validationSchema=Yup.object().shape({
email:Yup.string().required().label("Email").email(),
password:Yup.string().required().min(4).label("Password")


});


function LoginScreen(props) {



    return (
        <Screen style={styles.container}>
            <Image  style={styles.logo} source={require("../assets/logo.png")}/>

<AppForm
initialValues={{email:"", password:""}}
onSubmit={(values)=> console.log(values)}
validationSchema={validationSchema}
>
  

<AppFormField

placeholder="email"
autoCorrect={false}
keyboardType="email-address"
icon="email"
name="email"
autoCapitialize={false}

/>
<AppFormField

autoCapitialize={false}
autoCorrect={false}
icon="lock"
secureTextEntry
placeholder="Password"
name="password"

/>

<SubmitButton title="Login" />




</AppForm>



            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20
    }
})

export default LoginScreen;