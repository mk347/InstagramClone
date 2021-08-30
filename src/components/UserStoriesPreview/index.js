import React from "react";
import { FlatList } from "react-native";
import Story from "../UserStoryPreview";
import storiesData from '../../data/stories';

import styles from "./styles";

const Stories = () => {
    return (
        <FlatList style={styles.container}
            data={storiesData}
            keyExtractor={({ name }) => name}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Story story={item} />}
        />
    )
}

export default Stories;