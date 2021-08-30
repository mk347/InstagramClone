import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 7,
    },
    likes: {
        fontWeight: '600',
        margin: 3,
    },
    caption: {
        fontWeight: '600',
        margin: 3,
    },
    postedAt: {
        color: '#8c8c8c',
        margin: 3,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    heart: {
        marginRight: 15,
    },
    chatBubble: {
        transform: [{rotateY: '180deg'}],
        marginRight: 15,
    },
    paperPlane: {
    },
    bookmark: {

    }


});

export default styles;