export const GET_MODELS = "GET_MODELS";
export const SET_SEL_MODEL = "SEL_MODEL";
export const SET_LOADED = "SET_LOADED";
export const SET_LOADED_W_SET_SEL = "SET_LOADED_W_SET_SEL";

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

export function initialLoad() {
  return dispatch => {
    // GET request for model info done here

    // For right now we will have values set
    var models = [{
        id: 1,
        title: "GPT2 Model",
        description: "Fill in the starting text box with a phrase and let AI " +
        "autocomplete it for you. Pretrained Model provided by pytorch-pretrained" +
        "-bert.",
        url: "http://52.35.39.131:1337/text-gen/predict",
        params: {
          "text": "text",
          "num_words": "number",
          "num_tries": "number"
        }
      }, {
        id: 24,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }, {
        id: 53,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }, {
        id: 64,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }, {
        id: 15,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }];

    dispatch(handleInitialLoad(models));
  };
}

export function initialLoadWithSelection(id) {
  return dispatch => {
    var models = [{
        id: 1,
        title: "GPT2 Model",
        description: "Fill in the starting text box with a phrase and let AI " +
        "autocomplete it for you. Pretrained Model provided by pytorch-pretrained" +
        "-bert.",
        url: "http://52.35.39.131:1337/text-gen/predict",
        params: {
          "text": "text",
          "num_words": "number",
          "num_tries": "number"
        }
      }, {
        id: 24,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }, {
        id: 53,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }, {
        id: 64,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }, {
        id: 15,
        title: "TBD Model",
        description: "TBD description",
        url: "",
        params: {}
      }];

    var selectedModel = models.filter((val) => val.id === id)[0];
    dispatch(handleInitialLoadWithSelection(models, selectedModel));
  }
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
