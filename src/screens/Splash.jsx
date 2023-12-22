import { StyleSheet, Image } from 'react-native'
import React, {useEffect} from 'react'
import Screen from '../components/Screen'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Splash = () => {
  const navigation = useNavigation();
  const authData = useSelector(state => state.auth)
  useEffect(() => {
    console.log(authData);
    setTimeout(() => {
      if(authData.data === null){
        navigation.navigate('Login');
      }else{
        navigation.navigate('Main');
      }
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