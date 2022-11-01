import * as Location from "expo-location"
import React, { useState,useEffect } from 'react';
import {  View,StyleSheet,Text,ScrollView,Dimensions  } from 'react-native';

const {width} = Dimensions.get("window");

const API_KEY = "7a471a2bac95bda3718d024d2d617361"

export default function App() {
  const [country,setCountry] = useState("Loading...")
  const [days,setDays] = useState([]);
  const [dd,setDd] = useState(true);
  const getWeather = async() =>{
   const {granted} = await Location.requestForegroundPermissionsAsync()
    if(!granted){
      setDd(false);
    }
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy:5})
    const location = await Location.reverseGeocodeAsync({latitude,longitude}, {useGoogleMaps:false}
      )
     setCountry(location[0].country)
   const response = await  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`)
      const json = await response.json()
      console.log(json)
  }
  useEffect(()=>{
    getWeather(); 
  },[])
  return (
   <View style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>{country}</Text>
    </View>
    <ScrollView 
    pagingEnabled
    horizontal 
    contentContainerStyle={styles.weather}>
      <View style={styles.day}>
        <Text style={styles.temp}>22</Text>
        <Text style={styles.des}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>22</Text>
        <Text style={styles.des}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>22</Text>
        <Text style={styles.des}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>22</Text>
        <Text style={styles.des}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>22</Text>
        <Text style={styles.des}>Sunny</Text>
      </View>
    </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#8977ad",
  },
  city:{
    flex:1,
    
    justifyContent:"center",
    alignItems:"center"

  },
  cityName:{
    fontSize:48,
    fontWeight:"600"
  },
  weather:{
  
   
  },
  day:{ 
    width:411,
    alignItems:"center",
  },
  temp:{
    marginTop:50,
      fontSize: 158,
  },
  des:{
      fontSize:60,
      marginTop:-30
  }
})
