import React from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator, 
  TextInput,
  StyleSheet,
} from 'react-native';
import {getNewsSourceDetails, currentScene} from './actions';
import isEmpty from 'lodash/isEmpty';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  getArticlesByKeyword
} from './actions';
import Item from './item';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    flex: 0,
    flexDirection: 'row', 
    margin: '2%', 
    height: 60
  },
  inputBox: {
    borderWidth: 1, 
    width: '100%', 
    height: 40
  }
})

class SearchScreen extends React.Component{
  state={
    text: '',
    data: [],
    isFetching: false,
  }

  handleChangeText = (value) => {
    this.setState({
      text: value
    }, () => {
      if (this.state.text.length > 3) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.setState({ isFetching: true });
          getArticlesByKeyword(this.state.text).then((response) => {
            this.setState({data: response.data.articles, isFetching: false})
        })
        .catch((e) => {
          console.log("error: ", e);
        });
        }, 200);
      }
    });
  }

  renderItem = ({item, index}) => (
    <Item item={item} key={item.id}/>
  );

  render(){
    const {data} = this.props;
    return(
      <View style={styles.container}>
         <View style={styles.searchBar}>
            <TextInput
               style={styles.inputBox}
               onChangeText={this.handleChangeText}
               multiline={false}
               autoFocus
               placeholder="Search here"
             />
           </View>
          {
            this.state.isFetching? 
            <ActivityIndicator size="large"/> 
            :
            <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item=> item.id}
            style={styles.container}
          />
          }
      </View>
    )
  }
}

export default SearchScreen;
