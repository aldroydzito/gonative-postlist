import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    padding: 16,
    marginBottom: 24
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  author: {
    marginTop: 6,
    color: '#666',
    marginBottom: 12
  },
  content: {
    marginTop: 12,
    fontSize: 13
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEE'
  }
})

const Post = ({ title, author, content }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.divider} />
    <Text style={styles.content}>{content}</Text>
  </View>
)

export default Post
