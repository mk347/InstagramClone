import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";
import React from "react";
import { View, Text } from 'react-native';

const NotificationScreen = () => {
    return ( 
        <View style={{backgroundColor: "red", height: 1500}}>
            <Text style={{textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white'}}>Notification</Text>
        </View>
        );
}
 
export default NotificationScreen;