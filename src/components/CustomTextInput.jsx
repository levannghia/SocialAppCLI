import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({mt, placeholder, onChangeText, isValid, keyBoardType, icon}) => {
  return (
    <View
      style={{
        width: '90%',
        height: 55,
        borderWidth: 0.4,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: mt ? mt : 20,
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row'
      }}
    >
      {icon && icon}
      <TextInput 
        style={{color: '#9e9e9e'}}
        placeholder={placeholder}
      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})