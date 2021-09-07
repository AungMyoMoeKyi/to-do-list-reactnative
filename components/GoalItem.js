import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
// implement
const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text style={styles.text}>{props.title}</Text>
                <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} style={styles.button}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
// create style object
const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#eadbc8",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 20,
    },

    text: {
        marginRight: 1100,
    },
    button: {
        backgroundColor: "#d60000",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
    },
});

export default GoalItem;