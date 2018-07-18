import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { View, StatusBar, TextInput, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {
  getArticlesByKeyword
} from './actions';
import Axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: 60,  
    backgroundColor: '#FFF', 
    justifyContent: 'center'
  },
  searchBarContent: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: '2%'
  },
  title: {
    fontWeight: '600', 
    fontSize: 20,
    color: '#000'
  }
})

const SearchBar = () => (
  <View style={styles.container}>
    <View style={styles.searchBarContent}>
      <Text style={styles.title}>NewsApp</Text>
      <Icon
        name="search"
        size={24}
        color="#000"
        onPress={() => Actions.search()}
      />
    </View>
  </View>
);
export default SearchBar;
