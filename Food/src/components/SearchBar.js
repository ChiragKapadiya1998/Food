import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const SearchBar= (props) =>{
    return (
        <View style={styles.search}>
            <Image style={styles.searchImage} source = {require('../Image/search.png')}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={props.trem}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
               style={styles.textinput} 
               placeholder="SearchBar" />
        </View>
    );
}
const styles = StyleSheet.create({
    search:{
        backgroundColor: '#ffe6e6',
        height: 50,
        borderRadius:5,
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 20,
        },
        searchImage:{
          alignSelf:'center',
          marginHorizontal: 10,
          height:24,
          width:24,
        },
        textinput:{
            flex:1,
            fontSize:20
        }
})

export default SearchBar;