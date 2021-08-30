import React from "react";
import { View, FlatList } from "react-native";
import Story from "../UserStoryPreview";

import styles from "./styles";


const data = [
    {
        imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
        name: 'One',
    },
    {
        imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
        name: 'Two',
    },
    {
        imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
        name: 'Three',
    },
    {
        imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
        name: 'Four',
    },
    {
        imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
        name: 'Five',
    },
    {
        imageUri: 'https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-1/c0.41.200.200a/p200x200/113432768_10158562907959628_3884350632121752361_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vKHzIEsn2kAX853U_s&tn=qXQ_B8XDQqAvosd-&_nc_ht=scontent.fdet1-1.fna&oh=6580d7dfece539c9a4811ea1b8e62d28&oe=6147AAE9',
        name: 'Six',
    },
]

const Stories = () => {
    return ( 
        <FlatList style={styles.container}
            data={data}
            keyExtractor={({name}) => name}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />} 
        />
    )
}
 
export default Stories;