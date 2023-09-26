import React, { useContext } from "react";
 import { View, Text, StyleSheet } from "react-native";
 import { Context } from "../context/BlogContext";
 
 const EditScreen = ({ route }) => {
 const { state } = useContext(Context);
 
return (
<View style={styles.container}>
<Text>Edit Screen</Text>
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