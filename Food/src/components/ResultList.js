import React from 'react'
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
// import {withNavigation} from 'react-navigation';

 const ResultList = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                 return(
                 <TouchableOpacity onPress={()=>props.navigation.navigate("ReasultShowScreen",{id : item.id})}>
                     <ResultDetail result={item}/>
                 </TouchableOpacity>
                 );
             }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft: 10,
        marginBottom: 5,
    }
});
export default ResultList;