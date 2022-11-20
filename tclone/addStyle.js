import { StyleSheet } from "react-native";

const  addStyle = StyleSheet.create({
    addBoardContainer:{
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        padding:20,
        paddingTop: 20,
        width: '100%',
        fontSize: 20,
        color: 'black',
        fontWeight: '800',
        opacity: 0.8,
        shadowColor: 'skyblue',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0 , height : 4},
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 5,
        height: 300,
        textAlignVertical:'top',

    },
    button:{
        backgroundColor: 'skyblue',
        width: '40%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default addStyle;