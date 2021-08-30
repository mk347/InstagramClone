import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/logo.png';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
    return (  
        <HomeStack.Navigator>
        <HomeStack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            title: 'Instagram',
            headerLeft: () => (
              <Feather name="camera" size={25} color={'#000'} />
            ),
            headerTitle: () => (
              <Image source={logo} style={{width: 135, resizeMode: 'contain', position: 'absolute'}} />
            ),
            headerRight: () => (
              <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
            ),
          }}
        />
        <HomeStack.Screen 
          name="Story"
          component={StoryScreen}
        />
      </HomeStack.Navigator>
  
    );
}
 
export default HomeRoutes;