import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Screen from '../components/Screen'
import { THEME_COLOR } from '../utils/Colors'
import { SCREEN_SIZE } from '../utils/Sizes'
import Icon from 'react-native-vector-icons/Feather'

const MainScreen = () => {
  const navigation = useNavigation();
  const authData = useSelector(state => state.auth)
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Social</Text>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}
        >
          <Icon name={'home'} size={24} style={styles.tabIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}
        >
          <Icon name={'plus'} size={60} style={styles.tabIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}
          onPress={() => setSelectedTab(2)}
        >
          <Icon name={'user'} size={24} style={styles.tabIcon}/>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: SCREEN_SIZE,
  },
  title: {
    color: THEME_COLOR,
    fontSize: 28,
    fontWeight: '700',
  },
  bottomNav: {
    width: '100%',
    height: 70,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#f2f2f2',
    bottom: 10,
    alignItems: 'center'
  },
  bottomTab: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    color: 'red',
  },
  addBtn: {
    color: 'black',
    borderRadius: 30,
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})