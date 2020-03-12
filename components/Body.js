import React, { Component } from 'react';
import {
  View, Text, Image
} from 'react-native';
export default class Body extends Component {
  render() {
    return (
      <View style={{
        backgroundColor:'red',
        alignItems:'center',
        height:70,
        justifyContent:'center'
        
      }}>
        <Text >Ini Body    </Text>
        <Text>ini adalah body#2</Text>
        {/* <Image source={require('../fotos/foto_kota.jpg')} style ={{width:100, height:200}}/>ini untuk foto individul */}
      </View>
    )
  }
}