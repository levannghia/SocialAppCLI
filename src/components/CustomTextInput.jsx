import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({mt, placeholder, onChangeText, isValid, keyBoardType, icon, value, password = false}) => {
  return (
    <View
      style={{
        width: '80%',
        height: 55,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: mt ? mt : 20,
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row',
        borderColor: isValid ? '#9e9e9e' : 'red',

      }}
    >
      {icon && icon}
      <TextInput
        secureTextEntry={password}
        value={value}
        onChangeText={text => {
          onChangeText(text)
        }}
        style={{color: '#9e9e9e'}}
        placeholder={placeholder}
        keyboardType={keyBoardType ? keyBoardType : 'default'}
      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})