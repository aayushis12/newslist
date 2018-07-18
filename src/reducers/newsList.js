const initialState = {
  data: {},
  articles: {}
}

const NewsData = (state=initialState, action) => {
  switch(action.type){
    case "GET_NEWS_SOURCES":
      return {
        ...state, data: action.payload.data
    }
    case "CURRENT_SCENE":
    console.log('reducer',action.payload);
      return{
        ...state, scene:action.payload,
      }
    default:
      return state;
  }
}

export default NewsData;
