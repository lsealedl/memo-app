import React, { useContext } from "react";
import {
View,
Text,
StyleSheet,
FlatList,
Button,
TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
const { state, addMemo } = useContext(Context);

return (
<View style={styles.container}>
<FlatList
data={state}
keyExtractor={(memo) => memo.title}
renderItem={({ item }) => {
return (
<TouchableOpacity
onPress={() => navigation.navigate("Show", { id: item.id })}
>
<View style={styles.row}>
<Text style={styles.title}>
{item.title}-{item.id}
</Text>
<TouchableOpacity>
<Feather name="trash-2" size={24} color="black" />
</TouchableOpacity>
</View>
</TouchableOpacity>
);
}}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#d7d7d9",
},
row: {
flexDirection: "row",
justifyContent: "space-between",
paddingVertical: 20,
paddingHorizontal: 10,
borderTopWidth: 1,
borderColor: "#4f6f8c",
},
title: {
fontSize: 18,
},
});

export default IndexScreen;