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
import AppContext from '../context/AppContext';

const FavCard =({item})=>{
    const {colors, dark} = useTheme();
    const {width, height} = useWindowDimensions();
    const navigation = useNavigation();
    const {MovieData, setMovieData,toggleLike,deleteFromFav} = useContext(AppContext);
    
    
    return(<TouchableOpacity
      onPress={() => {deleteFromFav(item)}}
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
            onPress={() => toggleLike(item.id)}
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
    )
}
export default FavCard;