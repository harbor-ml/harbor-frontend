import {
  GET_MODELS,
  SET_SEL_MODEL,
  SET_LOADED,
  SET_LOADED_W_SET_SEL
} from './actions';

const initialState = {
  loaded: false,
  models: [],
  selectedModel: null
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
    default:
      return state;
  }
}
