import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const MainScreen = () => {
  const navigation = useNavigation();
  const authData = useSelector(state => state.auth)
  console.log(authData);
  return (
    <View>
      <Text>Main</Text>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})