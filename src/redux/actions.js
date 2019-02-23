export const GET_MODELS = "GET_MODELS";
export const SET_SEL_MODEL = "SEL_MODEL";
export const SET_LOADED = "SET_LOADED";

function handleInitialLoad(models) {
  if (models === undefined || models === null) {
    models = [];
  }
  return {
    type: SET_LOADED,
    models
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

export function initialLoad() {
  return dispatch => {
    // GET request for model info done here

    // For right now we will have values set
    var models = [12, 24, 53, 64, 15]

    dispatch(handleInitialLoad(models));
  };
}

export function selectModel(model) {
  return dispatch => {
    dispatch(handleSelectedModel(model));
  }
}

export function getModels() {
  return dispatch => {
    // GET request for model info done here

    // For right now we will have values set
    var models = [32, 54, 23, 14, 95]

    dispatch(handleReceivedModels(models));
  };
}
