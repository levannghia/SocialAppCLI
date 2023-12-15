import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'
import Screen from '../components/Screen'
import {useNavigation} from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [])
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
    </Screen>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: '70%',
    height: '60%',
    resizeMode: 'contain'
  }
})