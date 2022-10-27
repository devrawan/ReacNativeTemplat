import 'react-native-gesture-handler';
import React ,{useState,useMemo,createContext,useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigator/BottomTab';
import AuthStack from './src/features/auth/navigator/AuthStack';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/context/AppContext';
import { useColorScheme } from 'react-native';
import {useTheme} from "@react-navigation/native";
import { DarkValues, LightValues} from './src/utils/thems';
const HomeStackk = createStackNavigator();
const App = () => {
  const scheme = useColorScheme();
  const { colors, dark } = useTheme();


  return (  
    <AppProvider>
    <NavigationContainer theme={scheme === 'dark' ? DarkValues : LightValues}>
    <HomeStackk.Navigator>
{/* {currentUser.currentUser.token == "T8cApkdTVFDIUBe5Gl3toyYECV03ZBESuyoGpSrdq74Q6K7uI6siF38TjvNk40E2v3awcB"
?<HomeStackk.Screen name="Home" component={BottomTab}  options={{headerShown:false}}/>
:<HomeStackk.Screen name="auth" component={AuthStack} options={{headerShown:false}} />
} */}
      <HomeStackk.Screen name="Home" component={BottomTab}  options={{headerShown:false}}/>
       <HomeStackk.Screen name="auth" component={AuthStack} options={{headerShown:false}} />
      
      </HomeStackk.Navigator>
    </NavigationContainer>
   </AppProvider>
    //  <BottomTab/>
     
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

  highlight: {
    fontWeight: '700',

  },
});

export default App;
