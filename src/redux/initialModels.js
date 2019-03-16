export const initialModels = [{
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
