import React from 'react'
import { SafeAreaView, Text, View, Platform, StatusBar, StyleSheet, ScrollView, Dimensions } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/post'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.homescreen}>
            <Header navigation={ navigation } />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={ bottomTabIcons } />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    homescreen: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 //For Android
    }
})
export default HomeScreen

