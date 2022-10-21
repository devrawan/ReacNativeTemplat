//MainScreen
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useTheme, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppContext from '../../../context/AppContext';
const DetailsScreen = props => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const {MovieData, setMovieData} = useContext(AppContext);
  const navigation = useNavigation();
  const {item} = props.route.params;

  const handleSav = id => {
    let tempArr = [...MovieData];
    let index = tempArr.findIndex(el => el.id == id);
    tempArr[index].saved = !tempArr[index].saved;
    setMovieData(tempArr);
    console.log(tempArr);
  };
  const handleLike = id => {
    let tempArr = [...MovieData];
    let index = tempArr.findIndex(el => el.id == id);
    tempArr[index].like = !tempArr[index].like;
    setMovieData(tempArr);
    console.log(tempArr);
  };

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
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={colors.text} size={22} />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            fontSize: 17,
            alignSelf: 'flex-end',
            paddingStart: 50,
          }}>
          Details{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '14%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => handleSav(item.id)}>
            <Fontisto
              name="favorite"
              color={item.saved == true ? '#0296E5' : colors.text}
              size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <AntDesign
              name="heart"
              color={item.like == true ? 'red' : colors.text}
              size={22}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ImageBackground
        source={{uri: item.url}}
        resizeMode="center"
        style={{
          width: '100%',
          height: 210,
          backgroundColor: 'red',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Image
          source={{uri: 'https://mvcdn.fancaps.net/3064626.jpg'}}
          style={{
            width: 95,
            height: 130,
            backgroundColor: 'blue',
            alignSelf: 'flex-end',
            marginBottom: -64,
            marginStart: 29,
            borderRadius: 17,
          }}
        />
      </ImageBackground>

      <View
        style={{
          width: '68%',
          flexDirection: 'row',
          height: '11%',
          alignSelf: 'flex-end',
          paddingEnd: 55,
          paddingStart: 10,
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: colors.text}}>
          {item.title} Way Home
        </Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name="calendar" size={17} color={'#92929D'} />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.year} |{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="time-outline" size={17} color={'#92929D'} />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.time} |{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialIcons name="local-play" size={17} color={'#92929D'} />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            {item.category}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'flex-start',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          paddingVertical: 5,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            color: colors.text,
            textDecorationLine: 'underline',
          }}>
          {' '}
          About Movie
        </Text>
        <Text style={{fontSize: 17, fontWeight: '600', color: colors.text}}>
          {' '}
          Reviews
        </Text>
        <Text style={{fontSize: 17, fontWeight: '600', color: colors.text}}>
          Cast
        </Text>
      </View>
      <View style={{width: '100%', paddingHorizontal: 20, paddingVertical: 20}}>
        <Text style={{color: colors.text, fontSize: 14, lineHeight: 22}}>
          {item.decription}From DC Comics comes the Suicide Squad, an antihero
          team of incarcerated supervillains who act as deniable assets for the
          United States government, undertaking high-risk black ops missions in
          exchange for commuted prison sentences.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 55,
  },
});

export default DetailsScreen;
