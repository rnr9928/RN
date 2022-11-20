import { StatusBar } from 'expo-status-bar';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../style';
import  { Image  } from 'react-native';
import Animated, { useSharedValue , useAnimatedStyle, interpolate ,
withTiming, 
withDelay} from 'react-native-reanimated';


import React,{useState} from 'react';

export default function loginScreen({navigation}) {
 const {height,width} = Dimensions.get("window")
  const imagePosition = useSharedValue(1)
  const [isCreate,setIsCreate] = useState(false)


  const imageAni = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [ -height/2,0])
    return {
      // opacity: 1
      transform: [{translateY: withTiming(interpolation,{duration: 1000})}]
    }
  })

  const btnAni = useAnimatedStyle(() =>{
    const interpolation = interpolate(imagePosition.value,[0,1],[250,0])
    return {
      opacity: withTiming(imagePosition.value, {duration:500}),
      transform: [{translateY:withTiming(interpolation, {duration:1000})}]
    }
  })

  const closeButtonStyle = useAnimatedStyle(() =>{
    const interpolation = interpolate(imagePosition.value,[0,1],[180,360])
    return {
      opacity: withTiming(imagePosition.value === 1? 0 : 1, {duration: 800}),
      transform: [{rotate: withTiming(interpolation + "deg", {duration: 1000})}]
    }
  })

  const f_animate = useAnimatedStyle(() => {
    return{
      opacity: imagePosition.value === 0 ?  withDelay(400, withTiming(1, { duration:800})) :
      withTiming(0, {duration:300})
    }
  })

  const loginHandler = () =>{
    imagePosition.value = 0
    if (isCreate) {
      setIsCreate(false);
    }
  }
  const createHandler = () =>{
    imagePosition.value = 0
    if (!isCreate) {
      setIsCreate(true);
    }
  }

  const loginbg= require('../assets/login-bg.jpg')

  return (
    <View style={styles.container}>  
    <Animated.View style={[StyleSheet.absoluteFill,imageAni]}>
      <Image 
       style={{height: '100%', width: '100%'}}
        source={loginbg}
      />   

   <Animated.View style={[styles.closeButton, closeButtonStyle]}>
    <Text onPress={()=> (imagePosition.value = 1)}>X</Text> 
    </Animated.View>
   </Animated.View>

    <View style={styles.bottomContainer}>
      <Animated.View style={btnAni}>
         <View style={styles.movebtn}>
      <Pressable style={styles.button} onPress={loginHandler}>      
        <Text style={styles.buttonText} >LOGIN</Text>    
         </Pressable>
         </View>
      </Animated.View>

      <Animated.View  style={btnAni}>
      <View style={styles.movebtn2}>
      <Pressable style={styles.button} onPress={createHandler}>       
        <Text style={styles.buttonText}>CREATE</Text>
         </Pressable>
         </View>
         </Animated.View>

         <Animated.View  style={[styles.f_InputContainer, f_animate]}>
          <TextInput placeholder='이메일' style={styles.textInput}/>
          {isCreate && (
            <TextInput 
            placeholder='이름'  style={styles.textInput}
            />
           )}     
          <TextInput placeholder='비밀번호'  style={styles.textInput}/>
        
         <View style={styles.f_button}>
            <Text style={styles.buttonText} onPress={()=> navigation.navigate("Board")}>{isCreate ? 'CREATE' : 'LOGIN'}</Text>          
         </View>
       </Animated.View>

      </View>
    </View>
  );
}
