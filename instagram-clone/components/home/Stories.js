import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
      <View style={{ marginBottom: 13 }}>
          <ScrollView style={{width: Dimensions.get('screen').width}} horizontal showsHorizontalScrollIndicator={false}>
              {USERS.map((story, index) => (
                  <View key={index} style={{alignItems:'center'}}>
                      <Image style={styles.story} source={{uri:story.image}} />
                      <Text style={{ color: 'white',marginLeft: 6 }}>{story.user.length > 11 ? story.user.slice(0, 10) + '...' : story.user}</Text>
                  </View>
            ))}
          </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#FF8501'
    }}
)

export default Stories