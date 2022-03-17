import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ComponentsScreen</Text>
    </View>
  )
}

export default ComponentsScreen

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})