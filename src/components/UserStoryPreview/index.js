import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

import ProfilePicture from "../ProfilePicture";

const Story = ({ imageUri, name }) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Story");
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePicture uri={imageUri} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story;