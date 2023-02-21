import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-glyphs/60/ffffff/home-page.png',
        inactive: 'https://img.icons8.com/ios-glyphs/60/ffffff/home-page.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-glyphs/60/ffffff/search.png',
        inactive: 'https://img.icons8.com/ios-glyphs/60/ffffff/search.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios/60/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/60/ffffff/instagram-reel.png'
    },
    {
        name: 'shop',
        active: 'https://img.icons8.com/ios/60/ffffff/shopping-mall.png',
        inactive: 'https://img.icons8.com/ios/60/ffffff/shopping-mall.png'
    },
    {
        name: 'Profile',
        active: 'https://picsum.photos/id/237/200/300',
        inactive: 'https://picsum.photos/id/237/200/300'
    },
]

const BottomTabs = ({ icons }) => {
    const { activeTab, setActiveTab } = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image style={styles.icon} source={{uri: icon.inactive}} />
        </TouchableOpacity>
    )
    
    return (
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop:10
        
    },
    icon: {
        width: 30,
        height:30
    }
}
)

export default BottomTabs
