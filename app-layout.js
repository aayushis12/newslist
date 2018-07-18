import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from './src/search-bar';


const AppLayout = ({ children }) => (
  <View style={{flex: 1}}>
    {/* <View style={{height: 60}}>
      <SearchBar/>
    </View> */}
    { children }
  </View>
);

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
};

export default AppLayout;
