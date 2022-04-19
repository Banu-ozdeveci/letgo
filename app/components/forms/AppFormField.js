import React from 'react';
import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';
import {useFormikContext} from "formik"



function AppFormField({name, ...otherProps}) {

const {setFieldTouched,handleChange,errors,touched}=useFormikContext();

    return (
        <>
        
        <AppTextInput 
        {...otherProps}
onBlur={()=>setFieldTouched(name)}

onChangeText={handleChange(name)}


/>
<ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;