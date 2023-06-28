import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import First from './First';
import Second from './Second';
import Third from './Third';
import {Image} from 'react-native'


const BottomTab=createMaterialBottomTabNavigator()
const BottomTabNav=()=>{
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name='First' component={First}  options={{tabBarIcon: ({ color }) => (
            <Image source={require('../assest/one.png')} style={{height:30,width:30}}/>
          ),}}/>
            <BottomTab.Screen name='Second'  component={Second} options={{tabBarIcon: ({ color }) => (
            <Image source={require('../assest/two.png')} style={{height:30,width:30}}/>
          ),}}/>
            <BottomTab.Screen name='Third' component={Third} options={{tabBarIcon: ({ color }) => (
            <Image source={require('../assest/three.png')} style={{height:30,width:30}}/>
          ),}}/>


        </BottomTab.Navigator>
        
    )
}
export default BottomTabNav;