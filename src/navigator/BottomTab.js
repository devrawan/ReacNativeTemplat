import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React ,{useState,useMemo,createContext} from 'react';
const Tab = createBottomTabNavigator();
import {
  View,
  Text,
  useWindowDimensions,
} from 'react-native';
import HomeStack from '../features/home/navigator/HomeStack';
import FavScreen from '../features/favorite/FavScreen';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/Entypo';
import { FontFamily } from '../utils/thems';
import { useColorScheme } from 'react-native';
import { DarkValues, LightValues} from '../utils/thems';
import {useTheme} from "@react-navigation/native";
import { AppProvider } from '../context/AppContext';




const BottomTab =()  => {
  const scheme = useColorScheme();
  const { colors, dark } = useTheme();


  return (
    <AppProvider>
    <NavigationContainer theme={scheme === 'dark' ? DarkValues : LightValues}>
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarShowLabel:false,
        tabBarStyle:{
flexDirection:'row',
justifyContent:'center',
borderTopWidth:1,
borderTopColor:'#0296E5',

zIndex:1
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;
          let txt;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home';
            txt = 'Home';
          } else if (route.name === 'FavScreen') {
            iconName = focused ? 'save' : 'save';
            txt = 'Saved';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'user' : 'user';
            txt = 'Profile';
          }

          return (
            <View
              style={{
              width:60,
              height:50,
            marginTop:10,
            flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor:'pink',
             
              }}>
                <View style={{height:'60%',width:'100%',alignItems:'center',justifyContent:'center'}}>
                <MaterialIcons name={iconName} size={20} color={focused ? '#0296E5' : colors.border } />
                </View>
                <View style={{height:'40%',width:'100%',alignItems:'center',justifyContent:'center',paddingTop:2}}>
                <Text style={{color: focused ? '#0296E5' : colors.border ,fontSize:14}}>{txt}</Text> 
                </View>
             
            </View>
          );
        },
      })}
    
      >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown:false}} />
      <Tab.Screen name="FavScreen" component={FavScreen} options={{headerShown:false}} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />

    </Tab.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}
export default BottomTab;
