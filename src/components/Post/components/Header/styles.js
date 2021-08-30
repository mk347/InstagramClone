import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c',
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        marginRight: 15,
    }
});

export default styles;