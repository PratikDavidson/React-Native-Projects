import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-glyphs/60/ffffff/home-page.png',
        inactive: 'https://img.icons8.com/ios-glyphs/60/808080/home-page.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-glyphs/60/ffffff/search.png',
        inactive: 'https://img.icons8.com/ios-glyphs/60/808080/search.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios/60/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/60/808080/instagram-reel.png'
    },
    {
        name: 'shop',
        active: 'https://img.icons8.com/ios/60/ffffff/shopping-mall.png',
        inactive: 'https://img.icons8.com/ios/60/808080/shopping-mall.png'
    },
    {
        name: 'Profile',
        active: 'https://picsum.photos/id/237/200/300',
        inactive: 'https://picsum.photos/id/237/200/300'
    },
]

const BottomTabs = ({ icons }) => {
    const [ activeTab, setActiveTab ] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image style={[styles.icon, icon.name === 'Profile'? styles.profilePic():null, activeTab === 'Profile' && icon.name === activeTab?styles.profilePic(activeTab):null]} source={{uri: activeTab === icon.name ? icon.active:icon.inactive}} />
        </TouchableOpacity>
    )
    
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
            </View>
        </View>
        
  )
}

const styles = StyleSheet.create({
    wrapper: {
        postion: 'absolute',
        width: '100%',
        bottom: '1%',
        zIndex: 100,
        backgroundColor: '#000'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop:10
        
    },
    icon: {
        width: 30,
        height:30
    },
    profilePic: (activeTab='') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile'?2:0,
        borderColor: '#fff'
    })
}
)

export default BottomTabs
