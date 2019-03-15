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
        title: "Sample Image Classification Model",
        description: "Upload image, returns table of classifications (class_name, " +
        "class_description, score)",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Text Input 2": "text",
          "Number Input 1": "number",
          "Data": "data"
        }
      }, {
        id: 53,
        title: "Sample Text Classification Model",
        description: "Accepts an array of strings, returns a list of tuples (class_name), " +
        "class_description, score)",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Text Input 2": "text",
          "Number Input 1": "number"
        }
      }, {
        id: 64,
        title: "Sample Object Detection Model",
        description: "Accepts image, returns image with boundary boxes",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Number Input 1": "number",
          "Data": "data"
        }
      }, {
        id: 15,
        title: "Sample Style Transfer Model",
        description: "Accepts image, returns style transferred image",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Text Input 2": "text",
          "Data": "data"
        }
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
        url: "http://52.35.39.131:1337/text-gen/predict/",
        params: {
          "text": "text",
          "num_words": "number",
          "num_tries": "number"
        }
      }, {
        id: 24,
        title: "Sample Image Classification Model",
        description: "Upload image, returns table of classifications (class_name, " +
        "class_description, score)",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Text Input 2": "text",
          "Number Input 1": "number",
          "Data": "data"
        }
      }, {
        id: 53,
        title: "Sample Text Classification Model",
        description: "Accepts an array of strings, returns a list of tuples (class_name), " +
        "class_description, score)",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Text Input 2": "text",
          "Number Input 1": "number"
        }
      }, {
        id: 64,
        title: "Sample Object Detection Model",
        description: "Accepts image, returns image with boundary boxes",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Number Input 1": "number",
          "Data": "data"
        }
      }, {
        id: 15,
        title: "Sample Style Transfer Model",
        description: "Accepts image, returns style transferred image",
        url: "sampleurlhere",
        params: {
          "Text Input 1": "text",
          "Text Input 2": "text",
          "Data": "data"
        }
      }];

    var selectedModel = models.filter((val) => val.id === id)[0];
    dispatch(handleInitialLoadWithSelection(models, selectedModel));
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
    //   dispatch(query.data)
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

export function getModels() {
  return dispatch => {
    // GET request for model info done here

    // For right now we will have values set
    var models = [32, 54, 23, 14, 95]

    dispatch(handleReceivedModels(models));
  };
}
