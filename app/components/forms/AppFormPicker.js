import React from 'react';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from "formik"
import AppPicker from '../AppPicker';



function AppFormPicker({items,numberOfColumns,name,placeholder,PickerItemComponent}) {

const {setFieldValue,values,errors,touched}=useFormikContext();

    return (
        <>
        
        <AppPicker
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
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