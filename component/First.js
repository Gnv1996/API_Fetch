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
            <Text style={{textAlign:'center',marginTop:20,color:'red',fontWeight:'bold'}}>API Fetching Through 1st Method</Text>
           
            <View>
                <ScrollView>
                {data.map((user,index)=>{
                    return(
                        <View key={index} style={{margin:15, flex:1,flexDirection:'row',borderColor:'red',borderWidth:1,overflow:'hidden',width:370,marginRight:10,marginLeft:10,alignItems:'center',borderRadius:5}} >
                            <View>
                            <Image source={{uri:user.image}} style={{width:80,height:120,marginRight:10,justifyContent:'space-between',marginTop:10}}/>
                            </View>
                            <View style={{justifyContent:'space-between',marginTop:5,marginRight:15,}}>

                            <Text style={{color:'black', fontWeight:'bold',fontSize:18}}>{user.title}</Text>
                            <Text style={{color:'brown',fontWeight:'bold'}}>₹{user.price}</Text>
                            <Text>{user.description}</Text>
                            <Text>{user.rating.rate.count}</Text>     
                            </View>
                    </View>
                    )

                })}

                </ScrollView>
                
            </View>
            
        </View>
    )
}

export default First;