import axios from 'axios';

const authHeader = () => ({
  'x-api-key': '91a53883772d44bf8ee89d81249d4ac7'
})

export const getNewsSources = () => dispatch => {
  axios.get('https://newsapi.org/v1/sources', {
  headers: authHeader()})
  .then((response) => {
    dispatch({type: "GET_NEWS_SOURCES", payload: response})
  })
  .catch((error) => console.log(error))
}

export const getNewsSourceDetails = id => dispatch => {
  axios.get(`https://newsapi.org/v1/articles?source=${id}`, {
    headers: authHeader()
  })
  .then((response) => {
    dispatch({type: "GET_NEWS_ARTICLES", payload: {
      articles: response.data.articles,
      id
    }})
  })
  .catch((error) => console.log(error))
}

export const getArticlesByKeyword = (keyword) => {
  return axios.get(`https://newsapi.org/v2/everything?q=${keyword}`, {
    headers: authHeader()
  })
  .then((response) => {
    return response;
  })
  .catch((error) => console.log(error))
}

export const currentScene = scene => dispatch =>dispatch({
  type: "CURRENT_SCENE",
  payload: scene
})
