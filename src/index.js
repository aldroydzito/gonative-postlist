import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import './config/ReactotronConfig'
import './config/DevToolsConfig'

import Header from '~/components/Header'
import Post from '~/components/Post'
import StatusBar from '~/components/StatusBar'

const styles = StyleSheet.create({
  header: {
    flex: 0,
    backgroundColor: '#706fd3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  screen: {
    flex: 1,
    backgroundColor: '#474787'
  },
  posts: {
    backgroundColor: '#474787',
    flex: 1,
    padding: 24
  }
})

class App extends React.Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Victor Sales',
        content:
          'Magna mollit labore minim incididunt. Ea nostrud elit nulla voluptate id magna ea aliqua deserunt est occaecat cillum nisi sit. Reprehenderit consectetur sunt veniam eu reprehenderit laborum velit eiusmod ut incididunt. Ea nulla laboris magna amet adipisicing dolor ex sit aliquip cillum incididunt elit veniam.'
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Victor Sales',
        content:
          'Magna mollit labore minim incididunt. Ea nostrud elit nulla voluptate id magna ea aliqua deserunt est occaecat cillum nisi sit. Reprehenderit consectetur sunt veniam eu reprehenderit laborum velit eiusmod ut incididunt. Ea nulla laboris magna amet adipisicing dolor ex sit aliquip cillum incididunt elit veniam.'
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Victor Sales',
        content:
          'Magna mollit labore minim incididunt. Ea nostrud elit nulla voluptate id magna ea aliqua deserunt est occaecat cillum nisi sit. Reprehenderit consectetur sunt veniam eu reprehenderit laborum velit eiusmod ut incididunt. Ea nulla laboris magna amet adipisicing dolor ex sit aliquip cillum incididunt elit veniam.'
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Victor Sales',
        content:
          'Magna mollit labore minim incididunt. Ea nostrud elit nulla voluptate id magna ea aliqua deserunt est occaecat cillum nisi sit. Reprehenderit consectetur sunt veniam eu reprehenderit laborum velit eiusmod ut incididunt. Ea nulla laboris magna amet adipisicing dolor ex sit aliquip cillum incididunt elit veniam.'
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        content:
          'Magna mollit labore minim incididunt. Ea nostrud elit nulla voluptate id magna ea aliqua deserunt est occaecat cillum nisi sit. Reprehenderit consectetur sunt veniam eu reprehenderit laborum velit eiusmod ut incididunt. Ea nulla laboris magna amet adipisicing dolor ex sit aliquip cillum incididunt elit veniam.'
      }
    ]
  }

  render () {
    const { posts } = this.state
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.header} />
        <SafeAreaView style={styles.screen}>
          <Header style={styles.header} color="#FFF" />
          <ScrollView style={styles.posts}>
            {posts.map(post => (
              <Post
                key={post.id}
                title={post.title}
                author={post.author}
                content={post.content}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default App
