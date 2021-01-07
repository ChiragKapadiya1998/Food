import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const SearchBar= (props) =>{
    return (
        <View style={styles.search}>
            <Text>SearchScreenfgfg</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    search:{
       backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius:5,
        marginHorizontal:15
        }
})

export default SearchBar;