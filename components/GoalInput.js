import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet,Text } from "react-native";
const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    return (
        <View>
            <Text style={styles.text}>Create To Do List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add to-do"
                    style={styles.input}
                    onChangeText={goInputHandler}
                    value={enteredGoal}
                />
                <Button title="Add" onPress={props.onAddGo.bind(this, enteredGoal)} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        borderColor: "#2e2e00",
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
    },
    text:{
        textAlign:"center",
        fontSize:30,
        color:"#1d2951",
        padding:20,
        fontWeight:"Bold",
    }
});
export default GoalInput;
