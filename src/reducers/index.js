import {combineReducers} from 'redux';
import NewsData from './newsList';
import NewsArticles from './articles';

export default combineReducers({
  NewsData,
  NewsArticles
});