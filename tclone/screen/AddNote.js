import React from "react";
import { Text , ScrollView, TextInput, View, TouchableOpacity} from "react-native";
import addStyle from "../addStyle";

export default function AddNote({navigation,...props}){
return(
   <ScrollView>
        <View style ={{padding: 20, justifyContent: 'space-around'}}>
            <TextInput style={addStyle.input}
            value={props.note}
            onChangeText={(text) => props.setNote(text)}
           />

           <TouchableOpacity style={addStyle.button} onPress={()=> {props.handleNote() 
            navigation.navigate('Board')}
           }>
            <Text style={addStyle.buttonText}>Add</Text>
           </TouchableOpacity>
        </View>
   </ScrollView>
)

}

