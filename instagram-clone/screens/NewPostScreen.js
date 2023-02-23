import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.newPostScreen}>
        <AddNewPost />
    </SafeAreaView>
      

  )
}

const styles = StyleSheet.create({
    newPostScreen: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default NewPostScreen