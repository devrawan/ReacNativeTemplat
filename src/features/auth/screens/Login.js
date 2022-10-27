// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState,useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icn from 'react-native-vector-icons/Entypo';
import axios from 'react-native-axios';
import AppContext from '../../../context/AppContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const {users,setUsers,currentUser,setCurrentUser,handleCurrentUser} =  useContext(AppContext);

  
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

  const handleLogin = () => {
// console.log(users);
    axios
      .post('https://student.valuxapps.com/api/login', {
        email: `${email}`,
        password: `${password}`,
      })
      .then(function (response) {
        // console.log(response.data)
        if (response.data.status == true) {
          let result  = response.data.data; 
          var newUser = {
            id: `${response.data.data.id}`,
            name:`${response.data.data.name}`,
            email:`${response.data.data.email}`,
            image:`${response.data.data.image}`,
            user_token:`${response.data.data.token}`,
            phone:`${response.data.data.phone}`
          }
          
          handleCurrentUser(newUser);
          navigation.navigate('Home');
        }
       //console.log("current user ");
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
          Sign in{' '}
        </Text>
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          placeholderTextColor={'gray'}
          style={styles.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}

      <View style={styles.wrapperInput}>
        <TextInput
          placeholderTextColor={'gray'}
          style={styles.input}
          placeholder="Enter your Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => setPassword(text)}
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

      {email == '' || password == '' || checkValidEmail == true ? (
        <TouchableOpacity disabled style={styles.buttonDisable}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'white'}}>Forget password?!</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Create new account</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    opacity: 0.7,
  },

  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
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
    color: 'red',
    letterSpacing: 1,
  },
});
