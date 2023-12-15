import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { BG_COLOR, TEXT_COLOR, THEME_COLOR, THEME_COLOR2 } from '../utils/Colors'
import CustomTextInput from '../components/CustomTextInput'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

const LoginScreen = () => {
  return (
    <Screen>
      <View style={{ alignSelf: 'center' }}>
        <Image style={styles.image} source={require('../assets/images/logo.png')} />
        <Text style={[styles.welcomeText1, { marginTop: 30 }]}>Welcome Back</Text>
        <Text style={[styles.welcomeText1, { marginTop: 10 }]}>
          to <Text style={styles.welcomeText}>Social</Text>
        </Text>
      </View>
      <View>
        <CustomTextInput
          placeholder={'Enter email'}
          icon={<Icon size={20} style={{ marginRight: 10 }} name={'at-sign'} color={'#9e9e9e'} />}
        />
        <CustomTextInput
          placeholder={'Enter password'}
          icon={<Icon size={20} style={{ marginRight: 10 }} name={'lock'} color={'#9e9e9e'} />}
        />
        <LinearGradient colors={[THEME_COLOR, THEME_COLOR2]} style={styles.btn}>
          <TouchableOpacity style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Screen>
  )
}

export default LoginScreen

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
    width: '90%',
    height: 55,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 10
  },
  btnText: {
    color: BG_COLOR,
    fontSize: 20,
    fontWeight: '600',
  }
})