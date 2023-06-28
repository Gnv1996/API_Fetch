import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import StackTabNav from "./component/StackTabNav";

function App():JSX.Element{
  return(
    <NavigationContainer>
      <StackTabNav/>

    </NavigationContainer>
  )
}
export default App;