import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Card = props => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const {MovieData, setMovieData, toggleLike, handleSav} =
    useContext(AppContext);

  return (
    <TouchableOpacity
      key={props.item.id}
      onPress={() =>
        navigation.navigate('DetailsScreen', {
          item: props.item,
        })
      }>
        <Image
          source={{uri: props.item.url}}
          key={props.item.id}
          style={{width: 155, height: 210, marginEnd: 20, borderRadius: 17}}
        />
        <TouchableOpacity
          onPress={() => {
            toggleLike(props.item.id);
          }}>
          <AntDesign
            name="heart"
            style={{marginEnd: 30, marginTop: -30, alignSelf: 'flex-end'}}
            size={22}
            color={props.item.like == true ? 'red' : 'white'}></AntDesign>
        </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 55,
  },
});

export default Card;
