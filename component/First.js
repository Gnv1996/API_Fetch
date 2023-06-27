import React from "react";
import axios from "axios";
import { View,Text, Image,ScrollView} from "react-native";
import { useState,useEffect } from "react";




function First(){
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])

    console.log(data)

    return(
        <View>
            <Text style={{textAlign:'center',marginTop:20,color:'black'}}>API Fetching Through 1st Method</Text>
           
            <View>
                <ScrollView>
                {data.map((user,index)=>{
                    return(
                        <View key={index} style={{margin:5}} >
                            <Text style={{color:'black', fontWeight:'bold',fontSize:18}}>{user.title}</Text>
                            <Image source={{uri:user.image}} style={{width:80,height:70}}/>
                            <Text>{user.price}</Text>
                            <Text>{user.description}</Text>
                            <Text>{user.rating.rate.count}</Text>     
                    </View>
                    )

                })}

                </ScrollView>
                
            </View>
            
        </View>
    )
}

export default First;