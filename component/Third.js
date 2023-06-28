import React, {useEffect,useState}from 'react';
import {View,Text} from 'react-native';



const Third=()=>{
    const[data,setData]=useState(undefined);

    const getAPIData=async()=>{
        const url='https://jsonplaceholder.typicode.com/posts/1'
        let result=await fetch(url)
        result=await result.json();
        setData(result)
        
    }
    useEffect(()=>{
        getAPIData()

    },[])

    return(
        <View>
            <Text style={{textAlign:'center',fontSize:22,color:'red',fontWeight:'bold'}}>Third API Fetching</Text>


{
    data ? <View style={{margin:20}}>
        <Text>User ID:- {data.userId}</Text>
        <Text style={{color:'brown', fontWeight:'bold',fontSize:15}}>ID:- {data.id}</Text>
        <Text style={{color:'black', fontWeight:'bold',fontSize:18}}>{data.title}</Text> 
        <Text>{data.body}</Text>

    </View>:null
}

        </View>
        
    )
}
export default Third;