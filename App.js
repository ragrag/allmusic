import React from 'react';
import { Platform , StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';



export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      query:''
    }
  }
  onPress(){
    console.log('Pressed LOG');
  }
  onChangeText(value){
    this.setState({
      query:value
    });
  }
  render() {
    return (
      
        <View style={styles.container}>
          
          <TextInput underlineColorAndroid='#92278F' style={styles.input} placeholder="Search Song" value={this.state.textValue} 
            onChangeText={(value)=>this.onChangeText(value)}
            />
          <View style={styles.appCol}>
              <TouchableOpacity style={styles.tab1} onPress={this.onPress}>
                <View > 
                  <Text style={styles.whiteText}>Anghami </Text>
                </View>
              </TouchableOpacity>
          

              <TouchableOpacity style={styles.tab2} onPress={this.onPress}>
                <View > 
                  <Text style={styles.whiteText} >Soundcloud </Text>
                </View>
              </TouchableOpacity>

            <TouchableOpacity style={styles.tab3} onPress={this.onPress}>
                <View > 
                  <Text style={styles.whiteText}> Spotify </Text>
                </View>
            </TouchableOpacity>

          </View>
        
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor:'#212121'
  },
  
  appCol: {
    flexDirection:'row', 
    height:50
  },
  tab1 :{
    flex:1,
    backgroundColor:'#92278F',
    padding:10,
    borderRadius: 15, 
  },
  tab2 :{
    flex:1,
    backgroundColor:'#ff8800',
    padding:10,
    borderRadius: 15, 
  
  },
  tab3 :{
    flex:1,
    backgroundColor:'#1db954',
    padding:10,
    borderRadius: 15, 
  },
  whiteText :{
    color:'#FFFFFF',
    textAlign: 'center'
  },
  input :{
    height:50,
    color:'#FFFFFF'
  }
});

