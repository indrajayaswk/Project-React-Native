import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
export default class headers extends Component {
  render() {
    return (
      <View style={{ //ini stylenya untuk backgroundnya
        backgroundColor: '#00a1dd',
        height: 70,
        alignItems: 'center',
        justifyContent:'center'


      }}>
        <Text style={{//isi stylenya text
          color:"#ffffff",
          fontWeight:'bold'
         }}>{this.props.title}</Text> 
         
      </View>
    )
  }
}