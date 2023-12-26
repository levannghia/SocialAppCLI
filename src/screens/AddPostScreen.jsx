import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { SCREEN_SIZE } from '../utils/Sizes'

const AddPostScreen = () => {
  return (
    <Screen style={styles.container}>
        <TouchableOpacity style={styles.captionBox}>
            <TextInput style={styles.input} placeholder='Type caption here...'/>
        </TouchableOpacity>
    </Screen>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginHorizontal: SCREEN_SIZE
    },
    captionBox: {
        height: 130,
        borderWidth: .4,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#9e9e9e'
    },
    input:{
        width: '100%'
    }
})