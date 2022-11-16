import { StatusBar } from 'expo-status-bar';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './style';
import  { Image  } from 'react-native';
import Animated, { useSharedValue , useAnimatedStyle, interpolate ,
withTiming } from 'react-native-reanimated';

export default function App() {
 const {height,width} = Dimensions.get("window")
  const imagePosition = useSharedValue(1)
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

  const loginHandler = () =>{
    imagePosition.value = 0
  }
  const createHandler = () =>{
    imagePosition.value = 0
  }

  const loginbg= require('./assets/login-bg.jpg')

  return (
    <View style={styles.container}>  
    <Animated.View style={[StyleSheet.absoluteFill,imageAni]}>
      <Image 
       style={{height: '100%', width: '100%'}}
        source={loginbg}
      />   

   <Animated.View style={[styles.closeButton, closeButtonStyle]}>
    <Text onPress={()=> imagePosition.value = 1}>X</Text> 
    </Animated.View>
   </Animated.View>

    <View style={styles.bottomContainer}>
      <Animated.View style={btnAni}>
      <Pressable style={styles.button} onPress={loginHandler}>
        <Text style={styles.buttonText}>LOGIN</Text>
         </Pressable>
      </Animated.View>

      <Animated.View  style={btnAni}>
      <Pressable style={styles.button} onPress={createHandler}>
        <Text style={styles.buttonText}>CREATE</Text>
         </Pressable>
         </Animated.View>

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
