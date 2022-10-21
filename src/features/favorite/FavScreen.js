//MainScreen
import React, {useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useWindowDimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useTheme, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppContext from '../../context/AppContext';

const FavScreen = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const {counter, setCounter} = useContext(AppContext);
  const {MovieData, setMovieData} = useContext(AppContext);

  const handleLike = id => {
    let tempArr = [...MovieData];
    let index = tempArr.findIndex(el => el.id == id);
    tempArr[index].like = !tempArr[index].like;
    setMovieData(tempArr);
    console.log(tempArr);
  };

  const RenderItemm = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        let tempArr = [...MovieData];
        let index = tempArr.findIndex(el => el.id == item.id);
        tempArr[index].saved = !tempArr[index].saved;
        setMovieData(tempArr);
        console.log(tempArr);
      }}
      style={{flexDirection: 'row', width: '100%'}}>
      <View style={{width: '40%'}}>
        <Image
          source={{uri: item.url}}
          key={item.id}
          style={{
            width: 130,
            height: 150,

            borderRadius: 17,
            marginBottom: 20,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          width: '60%',
          marginBottom: 20,
          paddingStart: 5,
        }}>
        <Text
          style={{
            color: colors.text,
            paddingBottom: 6,
            fontSize: 18,
            paddingTop: 5,
          }}>
          {item.title}
        </Text>
        <View
          style={{flexDirection: 'row', paddingBottom: 5, paddingVertical: 5}}>
          <MaterialIcons
            name="local-play"
            size={19}
            color={'#92929D'}
            style={{marginEnd: 5}}
          />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.category}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingBottom: 5, paddingVertical: 5}}>
          <Feather
            name="calendar"
            size={17}
            color={'#92929D'}
            style={{marginEnd: 5}}
          />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.year}{' '}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingBottom: 5, paddingVertical: 5}}>
          <Ionicons
            name="time-outline"
            size={19}
            color={'#92929D'}
            style={{marginEnd: 5}}
          />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.time} minutes
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingBottom: 5, paddingVertical: 5}}>
          <AntDesign
            onPress={() => handleLike(item.id)}
            name="heart"
            size={17}
            color={item.like ? 'red' : 'white'}
            style={{marginEnd: 5}}
          />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.like == true ? 'Likeed' : 'Like'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.cont,
        {height: height, width: width, backgroundColor: colors.background},
      ]}>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
          paddingEnd: 25,
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={colors.text} size={22} />
        </TouchableOpacity>
        <Text style={{color: colors.text, fontSize: 17}}>Saved List </Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{paddingStart: 30,paddingVertical:10,paddingBottom:20}}
        showsVerticalScrollIndicator={false}>
        {MovieData.filter(item => item.saved == true).map(MovItem => (
          <RenderItemm key={MovItem.id} item={MovItem} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 55,
  },
});

export default FavScreen;
