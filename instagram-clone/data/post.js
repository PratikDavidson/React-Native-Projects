import { USERS } from "./users";

export const POSTS = [
    {
        imageurl: 'https://picsum.photos/id/237/200/300',
        user: USERS[0].user,
        likes: 500,
        caption: 'Me happy dog',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Cat',
                comment: 'Nice!'
            },
            {
                user: 'Mouse',
                comment: 'LOoking grt...'
            }
        ]
    },
    {
        imageurl: 'https://picsum.photos/id/237/200/300',
        user: USERS[0].user,
        likes: 500,
        caption: 'Me happy dog',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Cat',
                comment: 'Nice!'
            },
            {
                user: 'Mouse',
                comment: 'LOoking grt...'
            }
        ]
    },
]