import React from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {getNewsSourceDetails} from './actions';
import isEmpty from 'lodash/isEmpty';
import Item from './item';

class ArticlesList extends React.Component{
  componentWillMount(){
    if (!this.props.searchByKeyword && isEmpty(this.props.articles[this.props.id])) {
      this.props.getNewsSourceDetails(this.props.id);
    }
  }

  renderItem = ({item, index}) => (
    <Item item={item} key={item.id}/>
  );

  render(){
    const {searchByKeyword, data, articles} = this.props;
    if(isEmpty(articles[this.props.id]) && isEmpty(data)){
      return <ActivityIndicator size="large"/>
    }
    return(
      <View>
        <FlatList
          data={searchByKeyword? data : articles[this.props.id]}
          renderItem={this.renderItem}
          keyExtractor={item=> item.id}
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  getNewsSourceDetails,
}

const mapStateToProps = ({NewsArticles}) => ({
  articles: NewsArticles.articles
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
