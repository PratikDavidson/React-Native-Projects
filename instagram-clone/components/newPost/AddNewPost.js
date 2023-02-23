import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormikPostUploader />
    </View>
  )
}

const Header = () => (
  <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image style={{ width: 30, height: 30 }} source={{ uri:'https://img.icons8.com/metro/60/ffffff/back.png'}} />
      </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
      marginHorizontal: 10
  },
  headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25
    }
})

export default AddNewPost