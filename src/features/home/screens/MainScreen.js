//MainScreen
import React, {useEffect, useState, useContext} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Card from '../../../components/Crad';
import SmallCard from '../../../components/SmallCard';


const Category = [
  {id: '0', name: 'Now playing'},
  {id: '1', name: 'Upcoming'},
  {id: '2', name: 'Top rated'},
  {id: '3', name: 'Popular'},
];

const MainScreen = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const {MovieData, setMovieData, toggleLike} = useContext(AppContext);
  const [searchInput, setSearchInput] = useState('');
  const [sResult, setSResult] = useState();


  const handleSearch = txt => {
    let tempArr = [...MovieData];
    let index = tempArr.findIndex(el => el.title == txt);
    setSResult(tempArr[index]);
    
  };

  const renderItem = ({item}) => {return <Card item={item} />};

  const renderItemm = ({item}) => <SmallCard item={item} />;

  const renderCat = ({item}) => (
    <TouchableOpacity
      key={item.id}
      style={{paddingVertical: 10, marginHorizontal: 3, paddingHorizontal: 15}}>
      <Text style={{color: colors.text, fontSize: 14}}>{item.name}</Text>
    </TouchableOpacity>
  );

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

      <View style={styles.inputView}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchInput}
          onChangeText={val => setSearchInput(val)}
        />

        <TouchableOpacity
          onPress={() => {   
            // fetch('https://student.valuxapps.com/api/carts',{
            //   Authorization:'hNmhyE8y1bxeLleWTiJK7sBxEE7FszONugbCuqu3mojGUiIBZEIvnpMjmuO1mtirlSQfyo'
            // }) .then((res)=>
            // console.log(res.headers))      
            console.log(response);
            handleSearch(searchInput);
            setSearchInput('');
          }}
          
          style={styles.searchBtn}>
          <AntDesign name="search1" size={22} color="#67686D" />
        </TouchableOpacity>

      </View>
      {sResult ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Card item={sResult} />
        </View>
      ) : (
        <View style={styles.itemsView}>
          <FlatList
            horizontal
            data={MovieData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      <View style={[styles.catView, {width: width}]}>
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
          style={[styles.flatView, {width: width}]}
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
  inputView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#3A3F47',
    borderRadius: 16,
    marginTop: 20,
    justifyContent: 'space-between',
    height: 45,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  searchInput: {
    width: '85%',
    height: '100%',
    paddingHorizontal: 10,
  },
  searchBtn: {
    width: '15%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsView: {
    marginTop: 20,
    paddingVertical: 10,
    paddingStart: 10,
  },
  catView: {
    paddingVertical: 3,
    marginTop: 15,
  },

  flatView: {
    paddingBottom: 40,
    flexWrap: 'wrap',
    paddingStart: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
});

export default MainScreen;
