import {initialModels} from './initialModels';
import axios from 'axios';

export const GET_MODELS = "GET_MODELS";
export const SET_SEL_MODEL = "SEL_MODEL";
export const SET_LOADED = "SET_LOADED";
export const SET_LOADED_W_SET_SEL = "SET_LOADED_W_SET_SEL";
export const RECEIVED_MODEL_DATA = "RECEIVED_MODEL_DATA";
export const SEARCH_QUERY = "SEARCH_QUERY";

const BACKEND_URL = "https://api.modelzoo.live"
// const BACKEND_URL = "http://0.0.0.0:8000"

function handleInitialLoad(models) {
  if (models === undefined || models === null) {
    models = [];
  }
  return {
    type: SET_LOADED,
    models
  }
}

function handleInitialLoadWithSelection(models, selectedModel) {
  if (models === undefined || models == null) {
    models = [];
  }
  return {
    type: SET_LOADED_W_SET_SEL,
    models, selectedModel
  }
}

function handleSelectedModel(model) {
  if (model === undefined || model === null) {
    model = null;
  }
  return {
    type: SET_SEL_MODEL,
    model
  }
}

function handleReceivedModels(models) {
  if (models === undefined || models === null) {
    models = [];
  }
  return {
    type: GET_MODELS,
    models
  }
}

function handleReceivedData(data) {
  if (data === undefined || data === null) {
    data = [];
  }
  return {
    type: RECEIVED_MODEL_DATA,
    data
  }
}

function handleSearchQuery(models) {
  if (models === undefined || models === null) {
    models = [];
  }
  return {
    type: SEARCH_QUERY,
    models
  }
}

export function initialLoad() {
  return dispatch => {
    axios.get(`${BACKEND_URL}/models/popular/`).then((response) => {
      //console.log(response.data.models);
      dispatch(handleInitialLoad(response.data.models));
    }).catch((e) => {
      console.log(e);
    });
  };
}

export function initialLoadWithSelection(id) {
  return dispatch => {
    // We will eventually edit this method with batch Promise fulfillment

    axios.get(`${BACKEND_URL}/models/popular/`).then((response) => {
      var responseModels = response.data.models;
      //console.log(response.data.models);
      var selectedModel = responseModels.filter((val) => val.id === id)[0];
      dispatch(handleInitialLoadWithSelection(responseModels, selectedModel));
    }).catch((e) => {
      console.log(e);
    });
  }
}

export function getData(model_id, version, query) {
  return dispatch => {
    axios.post(`${BACKEND_URL}/query`, {
      id: model_id,
      version: version,
      query: {
        "input": query.split(";base64,")[1]
      }
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      dispatch(handleReceivedData(response.data.data))
      //dispatch(handleReceivedData(null))
    }).catch((e) => {
      console.log(e);
    });
  }
}

export function selectModel(model) {
  return dispatch => {
    dispatch(handleSelectedModel(model));
  }
}

export function searchQuery(name=[], category=[]) {
  return dispatch => {
    console.log("searchQuery called");
  // GET request for models based off of search done here

  // axios({
  //   method: 'get',
  //   url: `${BACKEND_URL}/api/models/`,
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   data: {name, category}
  // }).then((response) => {
  //   console.log(response);
  //
  //   possible cleaning needed to be done per model
  //
  //   dispatch(handleSearchQuery(response.data))
  // }).catch((e) => {
  //   console.log(e);
  // })

    dispatch(handleSearchQuery(null));
  }
}

export function getModels(id=null) {
  return dispatch => {
    // GET request for model info done here

    // axios({
    //   method: 'get',
    //   url: `${BACKEND_URL}/api/${id ? id : "popular"}`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: id ? {id} : {
    //     count: 5,
    //     start_rank: 0,
    //     metric: "requests"
    //   }
    // }).then((response) => {
    //   console.log(response);
    //
    //   possible cleaning needing to be done per model
    //
    //   dispatch(response.data)
    // }).catch((e) => {
    //   console.log(e);
    // });

    dispatch(handleReceivedModels(initialModels));
  };
}
