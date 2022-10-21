//MainScreen
import React, {useEffect, useState,useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/';
import {useTheme} from '@react-navigation/native';
import AppContext from '../../../context/AppContext';
import { useNavigation } from '@react-navigation/native';

const Category = [
  {id: '0', name: 'Now playing'},
  {id: '1', name: 'Upcoming'},
  {id: '2', name: 'Top rated'},
  {id: '3', name: 'Popular'},
];

const MainScreen = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation =useNavigation();
  const {MovieData,setMovieData} =useContext(AppContext);
const [searchInput,setSearchInput] =useState('');
const [sResult,setSResult] = useState({});

   const handleSearch =(txt)=>{
    let tempArr = [...MovieData]; 
    let index = tempArr.findIndex(el => el.title == txt);
    console.log(tempArr[index]);
    let item =tempArr[index];
    setSResult(...item);
   
   }
  const handleLike =(id)=>{
    let tempArr = [...MovieData];  
    let index = tempArr.findIndex(el => el.id == id);
    tempArr[index].like = !tempArr[index].like; 
    setMovieData(tempArr)                 
  console.log(tempArr);

  };
 
  const renderItem = ({item}) => {
    return(
    <TouchableOpacity 
    key={item.id} onPress={()=> navigation.navigate('DetailsScreen',{
      item : item
    })}>
      
      <Image
        source={{uri: item.url}}
        key={item.id}
        style={{width: 155, height: 210, marginEnd: 20, borderRadius: 17}}
      />
        <TouchableOpacity onPress={()=>{
          handleLike(item.id);
          }}>
          <AntDesign name="heart" style={{marginEnd:30,marginTop:-30,alignSelf:'flex-end'}} size={22} color={item.like == true ? 'red': 'white'}></AntDesign>
       </TouchableOpacity>
    
    
    </TouchableOpacity>
    )
  }
  const renderItemm = ({item}) => (
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
handleLike(item.id);
}}>
<AntDesign name="heart"style={{marginEnd:25,marginTop:-40,alignSelf:'flex-end'}} size={22} color={item.like == true ? 'red': 'white'}></AntDesign>

</TouchableOpacity>
     
       
    </TouchableOpacity>
  );

  const renderCat = ({item}) => (
    <TouchableOpacity
    
      key={item.id}
      style={{paddingVertical: 10, marginHorizontal: 3, paddingHorizontal: 15}}>
      <Text style={{color: colors.text, fontSize: 14}}>{item.name}</Text>
    </TouchableOpacity>
  );

  const RenderSearch =({item})=>{
    return (
      <TouchableOpacity 
        key={item.id} onPress={()=> navigation.navigate('DetailsScreen',{
          item : item
        })}>
          
          <Image
            source={{uri: item.url}}
            key={item.id}
            style={{width: 155, height: 210, marginEnd: 20, borderRadius: 17}}
          />
            <TouchableOpacity onPress={()=>{
              handleLike(item.id);
              }}>
              <AntDesign name="heart" style={{marginEnd:30,marginTop:-30,alignSelf:'flex-end'}} size={22} color={item.like == true ? 'red': 'white'}></AntDesign>
           </TouchableOpacity>
        
        
        </TouchableOpacity>
    )
      }

  return (
    <View
      style={[
        styles.cont,
        {height: height, width: width, backgroundColor: colors.background},
      ]}>
      <View style={styles.titleView}>
        <Text style={[styles.text, {color: colors.text}]}>
          {' '}
          What do you want to watch?
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#3A3F47',
          borderRadius: 16,
          marginTop: 20,
          justifyContent: 'space-between',
          height: 45,
          paddingHorizontal: 5,
          alignItems: 'center',
        }}>
        <TextInput
          style={{width: '85%', height: '100%', paddingHorizontal: 10}}
          placeholder="Search"
         value={searchInput}  
         onChangeText={(val)=>setSearchInput(val)}
        />

        <TouchableOpacity
        onPress={()=>
          {handleSearch(searchInput);
          searchInput('');
          }}
          style={{
            width: '15%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="search1" size={22} color="#67686D" />
        </TouchableOpacity>
      </View>

   
      <View style={{marginTop: 20, paddingVertical: 10, paddingStart: 10}}>
      <FlatList
        horizontal
        data={MovieData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  

   
     

      <View style={{width: width, paddingVertical: 3, marginTop: 15}}>
        <FlatList
          horizontal
          data={Category}
          renderItem={renderCat}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={{marginTop: 15, width: width}}>
        <FlatList
          numColumns={3}
          style={{
            paddingBottom: 40,
            flexWrap: 'wrap',
            width: width,
            paddingStart: 10,
            paddingVertical: 5,
            flexDirection: 'row',
          }}
          data={MovieData}
          renderItem={renderItemm}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 55,
    paddingHorizontal: 20,
  },
  titleView: {
  
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MainScreen;
