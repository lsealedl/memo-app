import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";
const EditScreen = ({ route }) => {
    const { state } = useContext(Context);
    const id = route.params.id;

    const memo = state.find((memo)=>memo.id===route.params.id);
    console.log(memo);
    return (
        <View style={styles.container}>
            <Text>{id}</Text>
            <MemoForm/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
    },
});

export default EditScreen;