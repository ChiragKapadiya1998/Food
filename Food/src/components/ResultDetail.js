import React from 'react'
import { View, Text,StyleSheet ,Image } from 'react-native'

const ResultDetail = (props) => {
    return (
        <View style={styles.container}>
            <Image 
              style={styles.image}
              source={{uri : props.result.image_url}}/>
            <Text style={styles.name}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       marginLeft: 10, 
    },
    image:{
        width:250,
        height: 120,
        borderRadius: 4,
        marginBottom: 8,
    },
    name:{
       fontWeight:'bold',
       marginBottom: 8,
    }
})
export default ResultDetail

