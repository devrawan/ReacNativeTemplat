import React ,{useContext,useState}from 'react';
import {
    Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import {useTheme,useNavigation} from '@react-navigation/native';
import AppContext from '../../src/context/AppContext';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SmallCard = ({item}) => {
    const {width, height} = useWindowDimensions();
    const navigation =useNavigation();
    const {MovieData,setMovieData,toggleLike} =useContext(AppContext);

 
  return (
    <TouchableOpacity
    style={{borderRadius:17}}
    key={item.id}
    onPress={()=> navigation.navigate('DetailsScreen',{
      item : item
    })}
    >
      <Image
        source={{uri: item.url}}
        key={item.id}
        style={{
          width: 100,
          height: 150,
          marginEnd: 20,
          borderRadius: 17,
          marginBottom: 15,
          
        }}
      />
<TouchableOpacity onPress={()=>{
toggleLike(item.id);
}}>
<AntDesign name="heart"style={{marginEnd:25,marginTop:-40,alignSelf:'flex-end'}} size={22} color={item.like == true ? 'red': 'white'}></AntDesign>

</TouchableOpacity>
     
       
    </TouchableOpacity>
  );
};




export default SmallCard;
const styles = StyleSheet.create({
    cont: {
      flex: 1,
      marginTop: 55,
    
    },
  });