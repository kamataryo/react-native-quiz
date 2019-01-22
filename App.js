import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import Quiz from 'src/quiz'

export const App = () => {
  return (
    <View style={ styles.container }>
      <Text>{'hello'}</Text>
      <Quiz />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
