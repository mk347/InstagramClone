import React from "react";
import { FlatList } from "react-native";
import Post from "../../components/Post";
import Stories from "../UserStoriesPreview";


const data = [
    {
        id: '1',
        user: {
            imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
            name: 'John'
        },
        imageUri: 'https://ae01.alicdn.com/kf/HTB15I95LpXXXXbmXFXXq6xXFXXXO/Kemp-Centrifuge-Abstract-Fine-Art-painting-Or-paints-Various-Sizes-Hand-Painted-Art-Supplies-Modern-Art.jpg',
        caption: 'Modern Abstract Art #Art',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        id: '2',
        user: {
            imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
            name: 'James'
        },
        imageUri: 'https://cdn.shopify.com/s/files/1/0054/2887/1268/collections/5_1200x1200.jpg?v=1593507101',
        caption: 'Modern Abstract Art #Art',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        id: '3',
        user: {
            imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
            name: 'Julie'
        },
        imageUri: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Red_On_Black_-_Modern_Abstract_Painting_1812f62a-f383-425e-a54c-f857d8f92c1d.jpg?v=1549267710',
        caption: 'Modern Abstract Art #Art',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    }
]

const Feed = () => {
    return ( 
        <FlatList 
            data={data}
            renderItem={({item}) => <Post post={item} />}
            keyExtractor={({id}) => id}
            ListHeaderComponent={Stories}
            showsVerticalScrollIndicator={false}
        />
    )
}
 
export default Feed;