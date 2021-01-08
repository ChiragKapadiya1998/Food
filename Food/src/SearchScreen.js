import React,{useState} from 'react';
import { View,Text,ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from './hooks/useResults';
import ResultList from './components/ResultList';

const SearchScreen= ({navigation}) => {
   
    const [term,setTerm] =useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
      return results.filter(result => {
        return result.price === price;
      });
    };
    
    return (
   

        <View style={{flex:1}}>
            <SearchBar 
              term={term} 
              onTermChange={setTerm}
              onTermSubmit={()=>searchApi(term)}
              />
             {errorMessage ? <Text>{errorMessage}</Text> : null}
             <ScrollView>
            <ResultList  navigation={navigation} results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultList  navigation={navigation} results={filterResultsByPrice('$$')} title='Bit Pricier'/>
            <ResultList navigation={navigation} results={filterResultsByPrice('$$')} title='Big Spender'/>
            <ResultList navigation={navigation} results={filterResultsByPrice('$')} title='Big New Spender'/>
            </ScrollView>
        </View>
    
    );
}

export default SearchScreen;