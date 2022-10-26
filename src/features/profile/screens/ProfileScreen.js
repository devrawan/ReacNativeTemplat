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
  useWindowDimensions,

} from 'react-native';
import {useTheme,useNavigation} from '@react-navigation/native';
import AppContext from '../../../context/AppContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View
    style={[
      styles.cont,
      {height: height, width: width, backgroundColor: colors.background},
    ]}>

     <View style={{color:'white',width:'100%',height:'10%',justifyContent:'center',alignItems:'center'}}> 
     <Text style={{fontSize:25,color:'white'}}>Profile Screen</Text>
     </View>
     
     <View style={{width:width,paddingHorizontal:20,paddingVertical:10}}>

     
     <TouchableOpacity onPress={()=>navigation.replace('auth')}  style={{width:"100%",backgroundColor:'white',height:50,justifyContent:'center',marginBottom:10,paddingStart:5,borderRadius:10}}>
     <Text>LogOut</Text>
     </TouchableOpacity> 
     </View>
    
      {/* <Button  title='LogOut' onPress={()=>navigation.navigate('SignUp')}/> */}
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
