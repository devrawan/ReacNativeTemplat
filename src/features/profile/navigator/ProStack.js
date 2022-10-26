import React ,{useContext}from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const HomeStackk = createStackNavigator();
import ProfileScreen from '../screens/ProfileScreen';


const ProStack=()=>{
return(
    <HomeStackk.Navigator>
        <HomeStackk.Screen name="ProfileScreen" component={ProfileScreen}  options={{headerShown:false}}/>
        {/* <HomeStackk.Screen name="Login" component={Login} options={{headerShown:false}} />
        <HomeStackk.Screen name="SignUp" component={SignUp} options={{headerShown:false}} /> */}

      </HomeStackk.Navigator>
)
}
export default ProStack;