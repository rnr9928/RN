import loginScreen from "./screen/loginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoardScreen from "./screen/boardScreen";
import AddNote from "./screen/AddNote";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";


const Stack = createNativeStackNavigator();



export default function App() {

  LogBox.ignoreAllLogs();
  const [note , setNote] = useState()
  const [notes , setNotes] = useState([])

  const handleNote =() =>{
    let newNote = note;
    let newNotes = [newNote, ...notes]
    setNotes(newNotes)
    setNote('')
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="home"
        component={loginScreen}
        
        />
        <Stack.Screen
             name="Board"
          >
             {props => <BoardScreen {...props}
             notes={notes} setNotes={setNotes} 
             note={note} setNote={setNote}/>}
             </Stack.Screen>
   

        <Stack.Screen
        name="AddNote">
        {props => <AddNote {...props}
        note={note} setNote={setNote} handleNote={handleNote}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
  
}
console.disableYellowBox = true;