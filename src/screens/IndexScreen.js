import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import BlogContext from '../context/BlogContext';

import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = () => {
    const {data, addMemo} = useContext(BlogContext)
  return (
    <View style={styles.container}>
      <Text>Index screen</Text>
      <Button title='Add Memo' onPress = {addMemo}/>
      <FlatList
        data={data}
        keyExtractor={(memo)=>memo.title}
        renderItem={({item})=>{
            return <View style={styles.row}><Text>{item.title}</Text><EvilIcons name="trash" size={24} color="black" /></View>
        }}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d7d7d9"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:"#4f6f8c"
    },
    title:{
        fontSize:18,
    },
});

export default IndexScreen;