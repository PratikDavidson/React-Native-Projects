import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/emoji/256/heart-suit.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/ios/60/ffffff/speech-bubble.png',
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/ios-glyphs/60/ffffff/filled-sent.png',
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/laces/1x/60/ffffff/bookmark-ribbon.png',
    }
]

const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 20 }}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal: 15, marginTop:10}}>
              <PostFooter />
              <Likes post={post} />
              <Caption post={post} />
              <CommentSection post={post} />
              <Comments post={post} />
        </View>
    </View>
  )
}

const PostHeader = ({ post }) => (
    <View style={styles.postheader}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={styles.story} source={{uri: post.profile_picture}} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>
        <View>
            <Text style={{color:'white',fontWeight:'900'}}>...</Text>
        </View>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{widht:'100%',height: 450}}>
        <Image style={{ height: '100%', resizeMode: 'cover' }} source={{ uri: post.imageurl }} /> 
    </View>   
)
    
const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
)
    

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri:imgUrl}} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{flexDirection:'row',marginTop:4}}>
        <Text style={{color:'white',fontWeight:'600'}}>{post.likes.toLocaleString('en')} Likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{marginTop:5}}>
        <Text style={{ color: 'white' }}>
            <Text style={{fontWeight:'600'}}>{post.user}:</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
 
)

const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length &&
            <Text style={{ color: 'grey' }}>
                View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        }
    </View>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection:'row',marginTop:5}}>
                <Text style={{ color: 'white' }}>
                    <Text style={{fontWeight:'600'}}>{comment.user}: </Text>
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    postheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.5,
        borderColor: '#FF8501'
    },
    footerIcon: {
        width: 33,
        height:33
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '33%',
        justifyContent:'space-between'
    }
})

export default Post