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
            <Text>API fetch 2nd Method</Text>

            <View>
                <ScrollView>
                {
                    data.map((user,index)=>{
                        return(
                            <View key={index}>
                                <Text>{user.userId}</Text>
                                <Text>{user.title}</Text>
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