import { View, Text } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'
import { Provider } from 'react-redux'
import MyStore from './src/redux/MyStore'

const App = () => {
  return (
    <Provider store={MyStore}>
      <MainNavigator />
    </Provider>
  )
}

export default App