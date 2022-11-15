import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    button:{
      backgroundColor: "#74b9ff",
      height:55,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 40,
      marginHorizontal:30,
      marginVertical:20,
      borderWidth:1,
      borderColor: "white"
    },
    buttonText:{
      fontSize:20,
      fontWeight:'600',
      letterSpacing: 4.5,
    },
    bottomContainer:{
      justifyContent: 'center',
     marginBottom: 100
    },
    textInput:{
      height:50,
      borderWidth:1,
      borderColor: "#636e72",
      marginHorizontal:20,
      marginVertical:10,
      borderRadius:30,
      paddingLeft: 10,
    },
    f_button: {
      backgroundColor: "#74b9ff",
      height:55,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 40,
      marginHorizontal:30,
      marginVertical:20,
      borderWidth:1,
      borderColor: "white",
      shadowColor: "#636e72",
      shadowOffset:{
        width:0,
        height:4,
      },
      shadowOpacity:0.75,
      shadowRadius: 3.8,
      elevation: 10,
    },
    f_InputContainer:{
      marginBottom:1
    },
    closeButton:{
      height:40,
      width:40,
      justifyContent:'center',
      alignSelf:'center',
      shadowColor: "#636e72",
      shadowOffset:{
        width:0,
        height:4,
      },
      shadowOpacity:0.75,
      shadowRadius: 3.8,
      elevation: 10,
      backgroundColor:'white',
      alignItems:'center',
      borderRadius:20
    }
  });
  
  export default styles;