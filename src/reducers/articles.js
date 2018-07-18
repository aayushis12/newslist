const initialState = {
  articles: {}
}

const NewsArticles = (state=initialState, action)=>{
  switch(action.type){
    case "GET_NEWS_ARTICLES":
      return{
        ...state, articles: {
          ...state.articles,
          [action.payload.id]: action.payload.articles
        }
      }
    default:
      return state;
  }
}

export default NewsArticles;