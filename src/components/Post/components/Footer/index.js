import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import AdIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {

    const [isLiked, setIsLike] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const [isSaved, setIsSave] = useState(false);

    const onLikePressed = () => {
        setIsLike(!isLiked);
        const amount = !isLiked ? 1 : -1;
        setLikesCount(likesCount + amount);        
    }

    useEffect(() => {
        setLikesCount(likesCountProp)
    }, [])

    const onSavePressed = () => {
        setIsSave(!isSaved);
    }


    return ( 
        <View style={styles.container}>

            <View style={styles.iconContainer}>
                <View style={styles.left}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ?
                            <AdIcon style={styles.heart}name="heart" size={25} color={'#e73838'} />
                            : <AdIcon style={styles.heart}name="hearto" size={25} color={'#545454'} />
                        }
                    </TouchableWithoutFeedback>
                    <IonIcon style={styles.chatBubble} name="chatbubble-outline" size={25} color={'#545454'} />
                    <IonIcon style={styles.paperPlane} name="paper-plane-outline" size={25} color={'#545454'} />
                </View>
                <View style={styles.right}>
                    <TouchableWithoutFeedback onPress={onSavePressed}>
                        {isSaved ?
                            <FaIcon style={styles.bookmark} name="bookmark" size={25} color={'#545454'} />
                            : <FaIcon style={styles.bookmark} name="bookmark-o" size={25} color={'#545454'} />
                        }
                    </TouchableWithoutFeedback>
                </View>
            </View>



            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}
 
export default Footer;