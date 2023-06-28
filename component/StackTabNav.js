import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNav from "./BottomTabNav";
import Home from "./Home";



const StackTab=createStackNavigator()
const StackTabNav=()=>{
    return(
        <StackTab.Navigator>
            <StackTab.Screen name='Home' component={Home}/>
            <StackTab.Screen name='Folder' component={BottomTabNav}/>


        </StackTab.Navigator>

    )
}
export default StackTabNav;