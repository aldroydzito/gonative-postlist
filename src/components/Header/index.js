import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    height: 54
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const Header = ({ style, color }) => (
  <View style={{ ...style, ...styles.header }}>
    <Text style={{ color, ...styles.title }}>GoNative App</Text>
  </View>
)

export default Header
