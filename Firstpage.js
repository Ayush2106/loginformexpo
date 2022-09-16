import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image , Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import React , {useState} from "react";
import Icon from 'react-native-vector-icons/Fontisto';
import Icong from 'react-native-vector-icons/AntDesign';


export default function Firstpage({navigation}) {
  const mpress= () =>{
  
  }
  const[agree, setAgree] = useState(false);

  const submit = () =>{
    navigation.navigate('Second');
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoo}>
      <Image
      style={{width:90 , height:100 }}
      source={{
        uri: 'https://imgs.search.brave.com/EYg4tcjqH9LWo1FL7kh_lbE6R4qc0Ii84-LW3yOtXwc/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/cWRIRjUtbzBNUGJm/a0FLMV83TDJBQUFB/QSZwaWQ9QXBp',
      }}/>
      <Text style={{fontSize:25, fontWeight:'medium', marginVertical:8}}>Create your Account</Text>
      </View>
      <View style={styles.hey}>
      <TextInput style={styles.textinput}
      autoCapitalize="none"
      autoCorrect={false}
     placeholder='First Name'/>
          <TextInput style={styles.textinput}
          autoCapitalize="none"
          autoCorrect={false}
     placeholder='Last Name'/>   
       <TextInput style={styles.textinput}
       autoCapitalize="none"
       autoCorrect={false}
     placeholder='Email Address'/> 
         <TextInput style={styles.textinput}
         autoCapitalize="none"
         autoCorrect={false}
         secureTextEntry={true}
     placeholder='Password'/>
     </View>
     <View style={styles.malefem} >

      <View style={styles.mf}>
      <Icon style={{marginRight:20}}size={18} color="black" name="male" />
      <Text
      onPress={mpress}
      >Male</Text>
      </View>

      <View style={styles.mf}>
      <Icon style={{marginRight:20}} size={18} color="black" name="male" />
      <Text
      >Female</Text>
      </View>
     </View>
      <StatusBar style="auto" />
      <View style={styles.linepcheck}>
        <Checkbox
        style={styles.checkbox}

        value={agree}
        onValueChange = { () => setAgree(!agree)}
        color= {agree ? "#4630EB":undefined}
        />
        <Text>I agree to the EDUREVTERMS and CONDITION and Privacy Policy</Text>
      </View>
      <TouchableOpacity style ={[styles.buttonStyle, 
      {
        backgroundColor:agree?"#4630EB":"grey",
      },
    ]}
    disabled={!agree}
      onPress={()=>submit()}
      >
        <Text style={{fontSize:16, color:'white'}}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style ={styles.buttonStyle1}>
      <Icong style={{marginRight:20}}size={18} color="white" name="google" />
        <Text style={{fontSize:16, color:'white'}}>Continue With Google</Text>
      </TouchableOpacity>
      <View style={styles.malefem1}>
      <Text>Already Have an Account ? </Text>
      <Text style={{color:'blue'}}>Sign In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//     flex: 1,
// paddingHorizontal:30,
// paddingTop:30,
//     backgroundColor: '#E5E4E2',
// paddingTop:'30%'
  },
  textinput:{
    backgroundColor:'white',
    height:40,
    borderWidth:1,
    borderColor:'grey',
    // marginBottom:25
    marginVertical:10
  },
  hey:{
    flexDirection:'column',
  },
  mf:{
    flexDirection:'row',
    backgroundColor:'white',
    height:50,
width:'45%',
    borderWidth:1,
    borderColor:'grey',
    justifyContent:'center',
    alignItems:'center',
    // marginHorizontal:20
    
  },
  malefem:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  malefem1:{
    flexDirection:'row',
    justifyContent:'center',
  },
  linepcheck:{
    flexDirection:'row',
    marginVertical:15
  },
  checkbox: {
    margin: 8,
  },
  logoo:{
    alignItems:'center',
    justifyContent:'center'
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
  buttonStyle1:{
    width:"100%",
    backgroundColor:'#4630EB',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  }
});
