import React from "react";
import { Text , ScrollView, TextInput, View, TouchableOpacity} from "react-native";
import addStyle from "../addStyle";

export default function AddBoard({navigation,...props}){
return(
   <ScrollView>
        <View style ={{padding: 20, justifyContent: 'space-around'}}>
            <TextInput style={addStyle.input}
            value={props.board}
            onChangeText={(text) => props.setBoard(text)}
           />

           <TouchableOpacity style={addStyle.button} onPress={()=> {props.handleboard() 
            navigation.navigate('Board')}
           }>
            <Text style={addStyle.buttonText}>Add</Text>
           </TouchableOpacity>
        </View>
   </ScrollView>
)

}

