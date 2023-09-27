import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MemoForm = ({ onSubmit,initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);

    return (
        <View>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Content:</Text>
            <TextInput
                style={styles.input}
                multiline
                numberOfLines={5}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Submit Memo"
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    );
};
MemoForm.defaultProps = {
    initValues:{title:"",content:""},
}
const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight:'bold',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#4f6f8c",
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        marginBottom: 15,
    },
});

export default MemoForm;
