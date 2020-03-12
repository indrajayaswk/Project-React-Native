import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
export default class Subheader extends Component {
  render() {
    return (
      <View style={{
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        height:50
      }}>
        <Text style={{
          color: 'black',
          fontWeight:'bold'
        }}>Ini SubHeader    </Text>
      </View>
    )
  }
}