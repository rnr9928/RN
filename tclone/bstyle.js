import { StyleSheet } from "react-native"
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&family=Jua&display=swap" rel="stylesheet"></link>

const bstyle = StyleSheet.create({
    notesContainer:{
       padding: 10,
       paddingHorizontal:20,
       marginBottom: 70,
       opacity: 0.8,
    },
    heading:{
        fontSize: 30,
        fontWeight: '700',
        color: 'skyblue',
    },
    divider:{
        width: '100%',
        height:2,
        backgroundColor: 'skyblue',
        marginTop: 5,
        marginBottom: 5
    },
    item:{
        marginBottom:20,
        padding: 15,
        color:'black',
        opacity: 0.8,
        marginTop: 10,
        shadowColor: 'skyblue',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth:15,
        
    },
   
    headingContainer:{
         flexDirection: 'row',
         justifyContent: "space-between",
         alignItems: 'center',
    },
    button :{
        backgroundColor: 'skyblue',
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50
    },
    buttenText:{
        color: 'white',
        fontSize: 32,
        fontWeight: '800',
        fontFamily: 'Jua-Regular', 
    },
    scrollView :{
        marginBottom : 70
    },
    note:{
        flexDirection: 'row',
        width: '75%',
    },
    text:{
        fontWeight: '700',
        fontSize: 19,
        alignSelf: 'center',
        fontFamily: 'Jua-Regular', 
    },
       input:{
        height: 40,
        paddingHorizontal: 20,
        width: '65%',
        fontSize: 20,
        color : 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: 'skyblue',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 5,

       },
       emptyContainer:{
        alignContent:'center',
        marginTop: 240,
       },
       emptyText:{
        color: 'skyblue',
        fontWeight: '600',
        fontSize: 15,
       },

})

export default bstyle;