import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/core";
import storiesData from '../../data/stories'

import styles from "./styles";


const StoryScreen = () => {

    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();
    const userId = route.params.userId;

    useEffect(() => {
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        setUserStories(userStories);
        setActiveStoryIndex(0);
    }, [])

    useEffect(() => {

        if (!userStories) {
            return;
        }

        if (activeStoryIndex < 0) {
            setActiveStoryIndex(0);
            return;
        }
        console.log('Setting active user story');
        if (activeStoryIndex >= userStories.stories.length) {
            setActiveStoryIndex(userStories.stories.length - 1)
            return;
        }
    }, [activeStoryIndex]);

    const navigateToNextUser = () => {
        navigation.navigate("Story", { userId: (userId + 1).toString() });
    }

    const navigateToPrevUser = () => {
        navigation.navigate("Story", { userId: (userId - 1).toString() });
    }


    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNextUser();
            return;
        } 
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;

        if (x < screenWidth / 2) {
            handlePrevStory();
        } else {
            handleNextStory();
        }
    }

    if (!userStories) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    const activeStory = userStories.stories[activeStoryIndex];


    return (
        
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>            
                <ImageBackground source={{ uri: activeStory.imageUri }} style={styles.image} />
            </TouchableWithoutFeedback>
        </SafeAreaView>

    );
}

export default StoryScreen;