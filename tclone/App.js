import loginScreen from "./screen/loginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoardScreen from "./screen/boardScreen";
import AddBoard from "./screen/AddBoard";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";


const Stack = createNativeStackNavigator();



export default function App() {

  LogBox.ignoreAllLogs(); //경고창 무시


  const [board , setBoard] = useState()
  const [boards , setBoards] = useState([])

  const handleboard =() =>{
    let newBoard = board;
    let newBoards = [newBoard, ...boards]
    setBoards(newBoards)
    setBoard('')
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
             boards={boards} setBoards={setBoards} 
             board={board} setBoard={setBoard}/>}
             </Stack.Screen>
   

        <Stack.Screen
        name="AddBoard">
        {props => <AddBoard {...props}
        board={board} setBoard={setBoard} handleboard={handleboard}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
  
}
console.disableYellowBox = true;