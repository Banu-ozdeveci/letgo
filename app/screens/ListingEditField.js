import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import CategoryPickerItem from '../components/CategoryPickerItem';

import {AppForm,AppFormField,AppFormPicker,SubmitButton} from "../components/forms";
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category")

})

    const categories =[
        {label:"Furniture", value:1, backgroundColor:"red", icon:"apps"},
        {label:"Clothing", value:2, backgroundColor:"green", icon:"apps"},
        {label:"Camera", value:3, backgroundColor:"blue", icon:"apps"},
        {label:"Furniture", value:4, backgroundColor:"red", icon:"apps"},
        {label:"Clothing", value:5, backgroundColor:"green", icon:"apps"},
        {label:"Media&Books", value:6, backgroundColor:"blue", icon:"apps"},
        {label:"Furniture", value:7, backgroundColor:"red", icon:"apps"},
        {label:"Clothing", value:8, backgroundColor:"green", icon:"apps"},
        {label:"Camera", value:9, backgroundColor:"blue", icon:"apps"}


    ]

function ListingEditField(props) {
    return (
        <Screen>
            <AppForm
             initialValues={{title:"",price:"",description:"",category:null}}
             onSubmit={(values)=>console.log(values)}
             validationSchema={validationSchema}
            
            >
<AppFormField maxLength={255} name="title" placeholder="Title"/>
<AppFormField maxLength={6} width={120} keyboardType="numeric" name="price" placeholder="Price"/>
<AppFormPicker numberOfColumns={3} PickerItemComponent={CategoryPickerItem} items={categories} name="category" placeholder="Category"/>

<AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description"/>
<SubmitButton title="Post" />
            </AppForm>

            
        </Screen>
    );
}

export default ListingEditField;