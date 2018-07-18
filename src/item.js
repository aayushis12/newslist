import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, 
    margin: '2%', 
    padding: '3%', 
    backgroundColor: '#FFF'
  },
  title: { 
    color: '#000080', 
    fontSize: 18
  },
  paddingMin: {
    padding: '1%',
  },
  defultTextColor: {
    color: '#000000',
  }
})
const Item = ({item}) => (
  <TouchableOpacity
      key={item.title}
      style={styles.container}
      onPress={() => Actions.article({url: item.url})}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.paddingMin}>{item.author}</Text>
      <Text style={styles.paddingMin}>{`Published at: ${item.publishedAt}`}</Text>
      <Text style={[styles.paddingMin, styles.defultTextColor]}>{item.description}</Text>
    </TouchableOpacity>
)
export default Item;