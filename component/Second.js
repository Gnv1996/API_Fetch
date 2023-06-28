import React from "react";
import {View,Text,ScrollView} from 'react-native';
import { useState,useEffect } from "react";



function Second(){
    const[data,setData]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
    return(
        <View>
            <Text style={{textAlign:'center',fontSize:22,color:'red',fontWeight:'bold'}}>API fetch 2nd Method</Text>

            <View style={{margin:10}}>
                <ScrollView>
                {
                    data.map((user,index)=>{
                        return(
                            <View key={index}>
                                <Text style={{color:'red', fontWeight:'bold',fontSize:15}}>{user.userId}</Text>
                                <Text style={{color:'black', fontWeight:'bold',fontSize:18}}>{user.title}</Text>
                                <Text>{user.body}</Text>
                                </View>
                        )

                    })
                }
                </ScrollView>
                
            </View>
        </View>

    )
}
export default Second;