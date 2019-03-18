import {
  GET_MODELS,
  SET_SEL_MODEL,
  SET_LOADED,
  SET_LOADED_W_SET_SEL,
  RECEIVED_MODEL_DATA,
  SEARCH_QUERY
} from './actions';

const initialState = {
  loaded: false,
  models: [],
  selectedModel: null,
  data: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADED:
      return {
        ...state,
        loaded: true,
        models: action.models
      }
    case SET_LOADED_W_SET_SEL:
      return {
        ...state,
        loaded: true,
        models: action.models,
        selectedModel: action.selectedModel
      }
    case GET_MODELS:
      return {
        ...state,
        models: [...state.models, ...action.models]
      }
    case SET_SEL_MODEL:
      return {
        ...state,
        selectedModel: action.model
      }
    case RECEIVED_MODEL_DATA:
      return {
        ...state,
        data: action.data
      }
    case SEARCH_QUERY:
      return {
        ...state,
        models: [...state.models, ...action.models]
      }
    default:
      return state;
  }
}
