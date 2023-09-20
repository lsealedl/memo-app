import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button ,TouchableOpacity} from 'react-native';

import BlogContext from '../context/BlogContext';

import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = () => {
  const {data, addMemo, deleteMemo  } = useContext(BlogContext)
  
  const handleDelete = (index) => {
    // Call the deleteMemo function with the index of the memo to delete
    deleteMemo(index);
  };

  return (
    
    <View style={styles.container}>
      <Text>Index screen</Text>
      <Button title='Add Memo' onPress = {addMemo}/>
      <FlatList
        data={data}
        keyExtractor={(memo)=>memo.title}
        renderItem={({item,index })=>{
            return <View style={styles.row}>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <EvilIcons name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
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