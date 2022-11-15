import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './style';
import  { Image } from 'react-native';

export default function App() {
 
  let loginbg= require('./assets/login-bg.jpg')

  return (
    <View style={styles.container}>  
    <View style={StyleSheet.absoluteFill}>
      <Image 
       style={{height: '50%', width: '100%'}}
        source={loginbg}
      />   
   </View>
   <View style={styles.closeButton}>
    <Text>X</Text>
   </View>
    <View style={styles.bottomContainer}>
      {/* <View style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
         </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>CREATE</Text>
         </View> */}
         <View  style={styles.f_InputContainer}>
          <TextInput placeholder='이메일' style={styles.textInput}/>
          <TextInput placeholder='이름'  style={styles.textInput}/>
          <TextInput placeholder='비밀번호'  style={styles.textInput}/>
         </View>
         <View style={styles.f_button}>
            <Text style={styles.buttonText}>LOG IN</Text>
         </View>
      </View>
    </View>
  );
}
