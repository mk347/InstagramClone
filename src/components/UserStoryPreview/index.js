import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import ProfilePicture from "../ProfilePicture";

const Story = ({ imageUri, name }) => {

    const onPress = () => {
        console.warn(`${name} story pressed`);
    }

    return ( 
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePicture uri={imageUri} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}
 
export default Story;