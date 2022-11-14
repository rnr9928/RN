import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const STORAGE_KEY = "@toDos";
const CATEGORY_KEY = "@category";

export default function App() {
 
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const [newText, setNewText] = useState();

  const travel = () => setWorking(false);
  const  work = () => setWorking(true)

  useEffect(() => {
    loadToDos();
    getCategory();
  }, []);

  const category = () =>{
    saveCategory();
  }


  const saveCategory = async () => {
    await AsyncStorage.setItem(CATEGORY_KEY, JSON.stringify(working))
  }

  const getCategory = async () => {
    const prevCategory = await AsyncStorage.getItem(CATEGORY_KEY);
    setWorking(JSON.parse(prevCategory))
  }



  const onChangeText = (payload) => setText(payload);


  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    console.log(s);
    s !== null ? setToDos(JSON.parse(s)) : null;
    };
  // const loadToDos = async () => {
  //   const s = await AsyncStorage.getItem(STORAGE_KEY);
  //   setToDos(JSON.parse(s));
  // };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
  const deleteToDo = async(key) => {
    Alert.alert("삭제", "정말로 삭제해?", [
      { text: "ㄴㄴ" },
      {
        text: "ㅇㅇ",
        // style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };

  const completeToDo = (key) =>{
    const newToDos = {...toDos};
    newToDos[key].complete = !newToDos[key].complete
    setToDos(newToDos)
    saveToDos(newToDos)
  }

  const updateToDo = (key) =>{
    Alert.prompt('수정하기','수정할꺼임?',()=>{
      let newToDos = {...toDos}
      newToDos[key].text = newText
      setToDos(newToDos);
      saveToDos(newToDos);
      setNewText("");
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={category}>
          <TouchableOpacity onPress={work}>
          <Text
            style={{  fontSize: 38,
              fontWeight: "600", color: working ? "black" : theme.grey }}
          >
            Work
          </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={category}>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              fontSize: 38,
    fontWeight: "600",
              color: !working ? "black" : theme.grey,
            }}
          >
            Travel
          </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={
          working ? "뭐할래?" : "여기어때"
        }
        style={styles.input}
      />
      </View>
      <ScrollView>
        {toDos ? (  
        Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={toDos[key].complete ? ({...styles.toDoText,
              textDecorationLine: 'line-through'}
              ):(
                styles.toDoText
              )}>{toDos[key].text}
              </Text>
              <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
              <TouchableOpacity style={{marginRight:12 , marginTop:-5}} onPress={()=>deleteToDo(key)}>
              <MaterialCommunityIcons name="delete" size={28} color="black" />
              </TouchableOpacity>
             
                    <TouchableOpacity style={{marginRight:15 , marginTop:-3.5}} onPress={()=>updateToDo(key)}>
                    <Ionicons name="md-newspaper" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginRight:15 , marginTop:0}} onPress={() => completeToDo(key)}>
											<Fontisto
												name={toDos[key].complete ? 'checkbox-active' : 'checkbox-passive'}
												size={18}
												color="white"
											/>
										</TouchableOpacity>
            </View>
            </View>
          ) : null
        )
      ) :null}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#A3B6C5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: "space-between",
    flexDirection:"row",
    alignItems:"center",
   
  },
  toDoText: {
    color: "#292f36",
    fontSize: 30,
    fontWeight: "600",
  },
})
