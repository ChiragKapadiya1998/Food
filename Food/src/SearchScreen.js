import React from 'react';
import { View,Text } from 'react-native';
import SearchBar from './components/SearchBar';

const SearchScreen= (props) =>{
    return (
        <View>
            <SearchBar />
            <Text>Screen</Text>
        </View>
    );
}

export default SearchScreen;