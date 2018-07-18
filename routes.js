import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import NewsApp from './src/index';
import ArticlesList from './src/articlesList';
import Article from './src/article';
import AppLayout from './app-layout';
import SearchScreen from './src/search-screen';

const Routes = () => (
  <AppLayout>
    <Router>
      <Stack key="root" hideNavBar={false}>
        <Scene key="newsapp" component={NewsApp} initial hideNavBar/>
        <Scene key="articleslist" component={ArticlesList} title="NewsApp"/>
        <Scene key="article" component={Article} title="NewsApp"/>
        <Scene key="search" component={SearchScreen} title="NewsApp"/>
      </Stack>
    </Router>
  </AppLayout>
)

export default Routes;
