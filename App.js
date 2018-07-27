import React from 'react';
import { Platform , StyleSheet, Text, View , TextInput, TouchableOpacity,WebView , Linking} from 'react-native';
const cheerio = require('react-native-cheerio')

const injectScript = ` (function () {
    window.onclick = function(e) {
      e.preventDefault();
      window.postMessage(e.target.href);
      e.stopPropagation()
    }
  }());`;
export default class App extends React.Component {
  


  constructor(){
    super();
    this.state = {
      query:'',
      uri:'',
    }
  }


queryAnghami(query){
  query = query.split(' ').join('+');
  let url = 'https://play.anghami.com/search/'+query;
  this.setState({
    uri:url
  });

 }
 
 querySoundcloud(query){

  query = query.split(' ').join('%20');
  let url = 'https://m.soundcloud.com/search?q=' + query;
  this.setState({
    uri:url
  });


 }
 
 queryYoutube(query){

  query = query.split(' ').join('+');
  let url = 'https://www.youtube.com/results?search_query='+query;
  this.setState({
    uri:url
  });
 }

 onMessage({ nativeEvent }) {
  const data = nativeEvent.data;
console.log(data);
  if (data !== undefined && data !== null) {
    Linking.openURL(data);
  }
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
            onChangeText={(value)=>this.onChangeText(value)} textAlign={'center'}
            />
          <View style={styles.appCol}>
              <TouchableOpacity style={styles.tab1} onPress={()=>this.queryAnghami(this.state.query)}>
                <View > 
                  <Text style={styles.whiteText}>Anghami </Text>
                </View>
              </TouchableOpacity>
          

              <TouchableOpacity style={styles.tab2} onPress={()=>this.querySoundcloud(this.state.query)}>
                <View > 
                  <Text style={styles.whiteText} >Soundcloud </Text>
                </View>
              </TouchableOpacity>

            {/* <TouchableOpacity style={styles.tab3} onPress={()=>this.queryYoutube(this.state.query)}>
                <View > 
                  <Text style={styles.whiteText}> Youtube </Text>
                </View>
            </TouchableOpacity> */}

          </View>
        

          <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{uri: this.state.uri }}
          style={styles.webView}
          injectedJavaScript={injectScript}
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          onMessage={this.onMessage}
        />
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
    backgroundColor:'#ff0000',
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
  },
webView:{
  marginTop: 20,
  backgroundColor:'#212121'
}
});

