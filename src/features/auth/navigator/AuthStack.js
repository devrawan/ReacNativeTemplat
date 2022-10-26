import React ,{useContext}from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const HomeStackk = createStackNavigator();
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';


const AuthStack=()=>{
return(
    <HomeStackk.Navigator>
        <HomeStackk.Screen name="Login" component={Login} options={{headerShown:false}} />
        <HomeStackk.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />

      </HomeStackk.Navigator>
)
}
export default AuthStack;