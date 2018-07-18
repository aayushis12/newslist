import React from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, Text, FlatList, TouchableOpacity, WebView} from 'react-native';
import {currentScene} from './actions';

class Article extends React.Component{
  componentWillMount(){
    this.props.currentScene(Actions.currentScene);
  }
  componentWillUnmount(){
    this.props.currentScene('');
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <WebView 
          source={{uri: this.props.url}}
          onError={error => console.log(error)}
          style={{flex: 1}}
          startInLoadingState/>
      </View>
      )
  }
}

const mapDispatchToProps = {
  currentScene,
}

export default connect(null, mapDispatchToProps)(Article);