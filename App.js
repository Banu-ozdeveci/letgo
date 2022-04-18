import { StyleSheet, Text, Switch,SafeAreaView, TextInput } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import React,{useState} from 'react';
import ListingScreen from './app/screens/ListingScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


export default function App() {
  const [input,setInput]=useState("")
  console.log(input);
  const [isNew,setIsNew] = useState(false)

  return (
    <Screen>
<Switch value={isNew}  onValueChange={(input)=>setIsNew(input)}/>
<AppTextInput placeholder="hi" icon="email"/>
<AppTextInput placeholder="hi" icon="email"/>
<AppPicker placeholder="picker"/>

    </Screen>)
}

