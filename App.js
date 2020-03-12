import React ,{Component}from 'react';
import Headers from './components/Headers.js'; //ini kalo mau tulis tanpa .jsnya engga apa apa(./) artinya membuat extensi sendiri
import Subheader from './components/Subheader.js';//ini kalo mau tulis tanpa .jsnya engga apa apa(./) artinya membuat extensi sendiri
import Body from './components/Body.js';//ini kalo mau tulis tanpa .jsnya engga apa apa, (./) artinya membuat extensi sendiri
import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  render(){
    return(
            <>
              
  <ImageBackground source={require('./fotos/foto_kota.jpg')} style={{width: '100%', height: '100%'}}>
    <StatusBar backgroundColor="#ffffff" barStyle="default"></StatusBar>

    
         <View style= {{backgroundColor: 'rgba(250, 250, 250, 0.7)',flexDirection:'row'}}>
            <TouchableOpacity style= {{marginHorizontal:60,marginVertical:30,}}onPress={()=>{
              alert('membuka Home')
            }}>
             <Text > 
              Ini adalah Judul
             </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{
           alert('buka menu')
         }}>
                <Image source={require('../Project1/fotos/menu_icon.png')} style={{height:40,width:40, marginHorizontal:130,marginVertical:20}}></Image>
         </TouchableOpacity>
         </View>

         <View style= {{backgroundColor: 'rgba(0, 0, 0, 0.4)',flex:1}}>
            <Text style={{marginVertical:0,fontSize:50,color:'white',fontWeight:'bold',marginLeft:30,marginTop:130}}>
              New York
            </Text>

            <TouchableOpacity style={{width:140,height:50,backgroundColor: 'rgba(250, 250, 250, 0.7)',marginLeft:30,borderRadius:20,flexDirection:'row'}}onPress={()=>{
                alert('Visit')
              }}>
              <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:25,marginVertical:10,marginRight:10}}> 
                Visit</Text>
                <Image source={require('../Project1/fotos/right_arrow_thin.png') }style={{width:40,height:20,marginVertical:15}}></Image>
              
            </TouchableOpacity>

         </View>
  
   </ImageBackground> 
                
                
              
            </>
          ) 

  }
}
const style= StyleSheet.create({
judul:{
flexDirection:"row"
        },

txtc:{
color:'black',
textAlign:'center',
justifyContent:'center',
        },
})

