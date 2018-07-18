import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, 
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';
import {
  getNewsSources,
  getNewsSourceDetails,
  currentScene,
} from './actions';
import SearchBar from './search-bar';

class NewsApp extends React.Component{
  state = {
    isModalOpen: false,
    toggleData: false,
  }
  componentDidMount(){
    this.props.currentScene(Actions.currentScene);
    if(isEmpty(this.props.data)){
      this.props.getNewsSources();
    }
  }

  sortData = () => {
    const data= sortBy(this.props.data.sources,[(source) => (source.name)]).reverse();
    return data;
  }

  sortInAscendingOrder = () => {
    this.setState({ isModalOpen: false })

  }
  renderItem = ({item, index}) => (
    <TouchableOpacity key={item.id} style={{borderWidth: 1, margin: '2%', padding: '3%', elevation: 1, backgroundColor: '#FFF'}}
      onPress={() => Actions.articleslist({id: item.id})}
    >
      <Text style={{color: '#000080', fontSize: 18}}>{item.name}</Text>
      <Text style={{fontSize: 16}}>{item.description}</Text>
    </TouchableOpacity>
  )

  render(){
    if(isEmpty(this.props.data)){
      return <ActivityIndicator size="large"/>
    }
    const displayData = this.state.toggleData? this.sortData(): this.props.data.sources ;
    return(
      <View style={{flex: 1}}>
      <View style={{height: 60}}>
      <SearchBar/>
    </View>
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
        {/* <Icon 
          name="rocket" 
          size={30} 
          color="#000" 
          style={{margin: '2%'}}
          
        /> */}
        <TouchableOpacity style={{backgroundColor: '#000080', margin: '2%'}}
          onPress={() => this.setState({toggleData: !this.state.toggleData})}
        >
          <Text style={{color: '#FFF', padding: '3%'}}>Sort</Text>
        </TouchableOpacity>
      </View>
        <FlatList 
          style={{flex: 1}}
          data={displayData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          extraData={this.state}
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  getNewsSources,
  getNewsSourceDetails,
  currentScene,
};
const mapStateToProps = ({NewsData}) => ({data: NewsData.data});

export default connect(mapStateToProps, mapDispatchToProps)(NewsApp);