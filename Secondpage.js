import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image ,Button , Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import React , {useState} from "react";
import PhoneInput from "react-native-phone-number-input";
// import Icon from 'react-native-vector-icons/Fontisto';


export default function Secondpage() {
    // const phoneInput = useRef<PhoneInput>(null);

    return(
        <View style={styles.container}>
        <View style={styles.logoo}>
      <Image
      style={{width:90 , height:100 }}
      source={{
        uri: 'https://imgs.search.brave.com/EYg4tcjqH9LWo1FL7kh_lbE6R4qc0Ii84-LW3yOtXwc/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/cWRIRjUtbzBNUGJm/a0FLMV83TDJBQUFB/QSZwaWQ9QXBp',
      }}/>
      <Text style={{fontSize:25, fontWeight:'medium', marginVertical:8}}>Create your Account</Text>
        <Text style = {{fontSize:16 ,fontWeight:'small' , marginTop:15}}>Enter Your Phone Number</Text>
      </View>
      <View>
    <TextInput
    keyboardType='nueric'
    />
     <PhoneInput
            // ref={phoneInput}
            // defaultValue={value}
            // defaultCode="DM"
            // layout="first"
            />
      </View>
      <TouchableOpacity style ={styles.buttonStyle}>
        <Text style={{fontSize:16, color:'white'}}>Submit</Text>
      </TouchableOpacity>

     

{/* <Icon size={24} color="black" name="male" /> */}

</View>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
      // paddingTop:30,
          backgroundColor: '#E5E4E2',
        //   justifyContent:'center'
        paddingTop:30
        },
        logoo:{
            alignItems:'center',
            // justifyContent:'center'
          },
          buttonStyle:{
            width:"100%",
            // color:'white',
            backgroundColor:'grey',
            height:50,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:10
          },
      })
      
      