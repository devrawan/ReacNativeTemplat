//MainScreen
import React ,{useContext,useState}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Button,
  View,
  useWindowDimensions
} from 'react-native';
import {useTheme,useNavigation} from '@react-navigation/native';
import AppContext from '../../../context/AppContext';

const ProfileScreen = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();

 
  return (
    <View  style={[
      styles.cont,
      {height: height, width: width, backgroundColor: 'pink'},
    ]} >

     <Text>jjj</Text>
      
      </View>
  );
};


const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 55,
  
  },
});

export default ProfileScreen;
