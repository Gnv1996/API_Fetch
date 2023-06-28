import React from "react";
import {View,Button} from 'react-native';




const Home=({navigation})=>{
    return(
        <View>
            <Button onPress={()=>navigation.navigate('Folder')} title='Explore App'/>
        </View>

    )
}
export default Home;