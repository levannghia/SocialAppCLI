import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})