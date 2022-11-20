import React from "react";
import { StatusBar } from "expo-status-bar";
import {  Text , View , TextInput , ScrollView , TouchableOpacity} from "react-native";


import bstyle from '../bstyle'


export default function boardScreen({navigation,...props}){
    return (
        <View style={bstyle.boardContainer}>
            <View style={bstyle.headingContainer}>
            <Text style={bstyle.heading}>게시판</Text>
            <View style={{flexDirection:'row'}}>

            <TouchableOpacity style={bstyle.button} onPress={()=> navigation.navigate('AddBoard')}>
                <Text>글쓰기</Text>             
            </TouchableOpacity>

             <StatusBar style="auto"/>
             </View>
            </View>      

            <View style={bstyle.divider}></View>     

            <ScrollView style={bstyle.scrollView} 
            //수평 스크롤 생기지 않게 하기
            showsHorizontalScrollIndicator={false}>  

            {props.boards.length === 0
            ?
            <View style={bstyle.emptyContainer}>
                <Text style={bstyle.emptyText}>텅</Text>
            </View>
            :
          props.boards.map((item,index)=>
            <View style={bstyle.item} key={index}>
                    <View style={bstyle.board}>                       
                        <Text style={bstyle.text}>{item}</Text>
                    </View>
            </View>
          )}
            </ScrollView>         
        </View>
        
    )
}

