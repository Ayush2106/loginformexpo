import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image , Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import React , {useState} from "react";
import Firstpage from './Firstpage';
import SecondPage from './Secondpage'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import firstpage from './firstpage';

export default function App() {
  // const mpress= () =>{
  // }
  // const[agree, setAgree] = useState(false);
  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //   <Firstpage/>
    //   {/* <SecondPage/> */}
    // </View>

<NavigationContainer>
<Stack.Navigator initialRouteName = "First">
  <Stack.Screen name = "First" component = {Firstpage} />
  <Stack.Screen name = "Second" component = {SecondPage}/>
</Stack.Navigator>
</NavigationContainer>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
paddingHorizontal:30,
// paddingTop:30,
    backgroundColor: '#E5E4E2',
paddingTop:60
  }
})
