//MainScreen
import React, {useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme, useNavigation} from '@react-navigation/native';
import AppContext from '../../../context/AppContext';
import FavCard from '../../../components/FavCard';

const FavScreen = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const {MovieData, setMovieData, toggleLike, deleteFromFav} =
    useContext(AppContext);
  return (
    <View
      style={[
        styles.cont,
        {height: height, width: width, backgroundColor: colors.background},
      ]}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={colors.text} size={22} />
        </TouchableOpacity>

        <Text style={{color: colors.text, fontSize: 17}}>Saved List </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrolStyle}
        showsVerticalScrollIndicator={false}>
        {MovieData.filter(item => item.saved == true).map(MovItem => (
          <FavCard key={MovItem.id} item={MovItem} />
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
  headerView: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingEnd: 25,
    marginBottom: 20,
  },
  scrolStyle: {
    paddingStart: 30,
    paddingVertical: 10,
    paddingBottom: 20,
  },
});

export default FavScreen;
