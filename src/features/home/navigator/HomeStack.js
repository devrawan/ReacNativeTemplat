
import React ,{useContext}from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const HomeStackk = createStackNavigator();
import MainScreen from '../screens/MainScreen';
import DetailsScreen from '../screens/DetailsScreen';
const HomeStack=()=>{
return(
  
    <HomeStackk.Navigator>
        <HomeStackk.Screen name="MainScreen" component={MainScreen}  options={{headerShown:false}}/>
        <HomeStackk.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown:false}} />
      </HomeStackk.Navigator>
     
)
}
export default HomeStack;