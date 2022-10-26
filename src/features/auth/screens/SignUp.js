//MainScreen
import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import AppContext from '../../../context/AppContext';
import axios from 'react-native-axios';
import Icn from 'react-native-vector-icons/Entypo';

const SignUp = () => {
  const {colors, dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPass, setCheckValidPass] = useState(true);
  const [errorType, setErrorType] = useState(null);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    setPassword(value);
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      setCheckValidPass(true);
      setErrorType('Password must not contain Whitespaces');
      return;
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      setCheckValidPass(true);
      setErrorType('Password must have at least one Uppercase Character.');
      return;
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      setCheckValidPass(true);
      setErrorType('Password must have at least one Lowercase Character.');
      return;
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      setCheckValidPass(true);
      setErrorType('Password must contain at least one Digit.');
      return;
    }

    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
      setCheckValidPass(true);
      setErrorType('Password must contain at least one Special Symbol.');
      return;
    } else {
      setCheckValidPass(false);
    }
    return;
  };

  const handleRegister = () => {
    // let formData=  new FormData();
    // formData.append("name",`${name}`);
    // formData.append("email",`${email}`);
    // formData.append("password",`${password}`);
    // formData.append("phone",`${phone}`);
    //  let ob ={
    //   "name":"wopla",
    //   "email":"wpolp23000@gmail.com",
    //   "password":"50506786",
    //   "phone":"1122222909023"
    //   }

    axios
      .post('https://student.valuxapps.com/api/register', {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
        phone: `${phone}`,
      })

      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pond5.com/space-cartoon-animated-background-footage-075133825_iconl.jpeg',
      }}
      style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: '#0296E5',
            paddingVertical: 5,
            fontSize: 22,
            fontWeight: '600',
          }}>
          {' '}
          Sign up{' '}
        </Text>
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>

      {checkValidEmail ? (
        <Text
          style={[
            styles.textFailed,
            {marginTop: -20, color: 'red', marginBottom: 5},
          ]}>
          Wrong format email
        </Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => checkPasswordValidity(text)}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
          {seePassword ? (
            <Icn name="eye-with-line" color={'white'} size={18}></Icn>
          ) : (
            <Icn name="eye" color={'white'} size={18}></Icn>
          )}
        </TouchableOpacity>
      </View>
      {checkValidPass ? (
        <Text
          style={[
            styles.textFailed,
            {color: 'red', marginTop: -20, marginBottom: 5},
          ]}>
          {errorType}
        </Text>
      ) : (
        <Text
          style={[
            styles.textFailed,
            {color: 'yellow', marginTop: -20, marginBottom: 5},
          ]}>
          Strong Password{' '}
        </Text>
      )}

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 2,
  },
  input: {
    color: 'white',
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0296E5',
    borderRadius: 5,
    marginTop: 25,
    paddingVertical: 15,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  textFailed: {
    paddingStart: 5,
    alignSelf: 'flex-start',
    color: 'yellow',
  },
});
