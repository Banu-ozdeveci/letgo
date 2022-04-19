import React from 'react';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from "formik"
import AppPicker from '../AppPicker';



function AppFormPicker({items,name,placeholder}) {

const {setFieldValue,values,errors,touched}=useFormikContext();

    return (
        <>
        
        <AppPicker
items={items}
onSelectItem={(item)=>setFieldValue(name,item.label)}
placeholder={placeholder}
selectedItem={values[name]}


/>
<ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;