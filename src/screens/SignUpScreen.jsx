import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import { BG_COLOR, TEXT_COLOR, THEME_COLOR, THEME_COLOR2 } from '../utils/Colors'
import CustomTextInput from '../components/CustomTextInput'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [badName, setBadName] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [badPassword, setBadPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectGender, setSelectGender] = useState(0)

  const validate = () => {
    let isValid = false;
    if (email == '') {
      setBadEmail('Please enter email');
      isValid = false;
    } else if (email != '' && !email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      setBadEmail('Please enter valid email');
      isValid = false;
    } else if (email != '' && email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      isValid = true;
      setBadEmail('');
    }

    if (password == '') {
      isValid = false;
      setBadPassword('Please enter password');
    } else if (password != '' && password.length < 8) {
      setBadPassword('Please enter min 8 character password');
      isValid = false
    } else if (password != '' && password.length > 7) {
      setBadPassword('');
      isValid = true;
    }

    if(name == ''){
      setBadName('Please enter name');
      isValid = false;
    }else if(name != ''){
      setBadName('');
      isValid = true;
    }

    return isValid;
  }

  const login = () => {
    setLoading(true)
  }

  return (
    <Screen>
      <ScrollView>
        <View style={{ alignSelf: 'center' }}>
          <Image style={styles.image} source={require('../assets/images/logo.png')} />
          <Text style={[styles.welcomeText1, { marginTop: 30 }]}>Create Account</Text>
          <Text style={[styles.welcomeText1, { marginTop: 10 }]}>
            in <Text style={styles.welcomeText}>Social</Text>
          </Text>
        </View>
        <View>
          <CustomTextInput
            isValid={badEmail == '' ? true : false}
            value={name}
            onChangeText={text => setName(text)}
            placeholder={'Enter name'}
            icon={<Icon size={20} style={{ marginRight: 10 }} name={'user'} color={'#9e9e9e'} />}
          />
          {badName != '' && <Text style={styles.errorText}>{badName}</Text>}
          <CustomTextInput
            isValid={badEmail == '' ? true : false}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'Enter email'}
            icon={<Icon size={20} style={{ marginRight: 10 }} name={'at-sign'} color={'#9e9e9e'} />}
          />
          {badEmail != '' && <Text style={styles.errorText}>{badEmail}</Text>}
          <Text style={styles.heading}>Select Gender</Text>
          <View style={styles.genderView}>
            <TouchableOpacity style={[styles.genderBtn, { borderColor: selectGender === 0 ? 'green' : '#9e9e9e' }]} onPress={() => setSelectGender(0)}>
              <Image style={styles.icon} source={require('../assets/images/female-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.genderBtn, { borderColor: selectGender === 1 ? 'green' : '#9e9e9e' }]} onPress={() => setSelectGender(1)}>
              <Image style={styles.icon} source={require('../assets/images/male-icon.png')} />
            </TouchableOpacity>
          </View>
          <CustomTextInput
            password={true}
            isValid={badPassword == '' ? true : false}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder={'Enter password'}
            icon={<Icon size={20} style={{ marginRight: 10 }} name={'lock'} color={'#9e9e9e'} />}
          />
          {badPassword != '' && <Text style={styles.errorText}>{badPassword}</Text>}
          <LinearGradient colors={[THEME_COLOR, THEME_COLOR2]} style={styles.btn}>
            <TouchableOpacity
              style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}
              onPress={() => {
                if (validate()) {
                  login();
                }
              }}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Pressable onPress={() => navigation.navigate('Login')} style={styles.signUpText}>
            <Text>Already have Account?</Text>
            <Text style={styles.signUp}>Login</Text>
          </Pressable>
          <Loader visible={loading} />
        </View>
      </ScrollView>
    </Screen>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 100,
    marginTop: Dimensions.get('window').height / 8,
  },
  welcomeText: {
    color: THEME_COLOR,
  },
  welcomeText1: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 30,
    color: TEXT_COLOR,
  },
  btn: {
    width: '80%',
    height: 55,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 10
  },
  btnText: {
    color: BG_COLOR,
    fontSize: 20,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginLeft: 50,
    marginTop: 5
  },
  signUpText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: '500',
    marginBottom: 100
  },
  signUp: {
    color: THEME_COLOR,
    fontWeight: '700',
    marginLeft: 10,
  },
  heading: {
    color: TEXT_COLOR,
    marginTop: 20,
    marginLeft: "10%"
  },
  genderView: {
    width: "80%",
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  genderBtn: {
    borderWidth: 0.4,
    borderRadius: 10,
    height: 100,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40
  }
})