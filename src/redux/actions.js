import {initialModels} from './initialModels';

export const GET_MODELS = "GET_MODELS";
export const SET_SEL_MODEL = "SEL_MODEL";
export const SET_LOADED = "SET_LOADED";
export const SET_LOADED_W_SET_SEL = "SET_LOADED_W_SET_SEL";
export const RECEIVED_DATA = "RECEIVED_DATA";

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
  if (data == undefined || data == null) {
    data = [];
  }
  return {
    type: RECEIVED_DATA,
    data
  }
}

export function initialLoad() {
  return dispatch => {
    // GET request for model info done here

    // axios({
    //   method: 'get',
    //   url: `${BACKEND_URL}/api/popular`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: {
    //     count: 5,
    //     start_rank: 0,
    //     metric: "requests"
    //   }
    // }).then((response) => {
    //   console.log(response);
    //
    //   possible cleaning needing to be per model
    //
    //   dispatch(query.data)
    // }).catch((e) => {
    //   console.log(e);
    // });

    dispatch(handleInitialLoad(initialModels));
  };
}

export function initialLoadWithSelection(id) {
  return dispatch => {
    // GET request for model info done here

    // let getPopulars = axios({
    //   method: 'get',
    //   url: `${BACKEND_URL}/api/popular/`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: {
    //     count: 5,
    //     start_rank: 0,
    //     metric: "requests"
    //   }
    // })
    //
    // let getSelection = axios({
    //  method: 'get',
    //  url: `${BACKEND_URL}/api/model/`,
    //  data: {id}
    // })
    //
    // Promise.all([getSelection, getPopulars]).then((response) => {
    //   console.log(response);
    //
    //   possible cleaning needing to be per model
    //
    //   dispatch(query.data)
    // }).catch((e) => {
    //   console.log(e);
    // });

    var selectedModel = initialModels.filter((val) => val.id === id)[0];
    dispatch(handleInitialLoadWithSelection(initialModels, selectedModel));
  }
}

export function getData(model_id, version, query) {
  return dispatch => {
    // axios({
    //   method: 'post',
    //   url: `${BACKEND_URL}/api/query`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: query
    // }).then((response) => {
    //   console.log(response);
    //   dispatch(handleReceivedData(query.data))
    // }).catch((e) => {
    //   console.log(e);
    // });
  }
}

export function selectModel(model) {
  return dispatch => {
    dispatch(handleSelectedModel(model));
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
    //   possible cleaning needing to be per model
    //
    //   dispatch(query.data)
    // }).catch((e) => {
    //   console.log(e);
    // });

    dispatch(handleReceivedModels(initialModels));
  };
}
