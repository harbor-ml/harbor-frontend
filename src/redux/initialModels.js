export const initialModels = [{
    id: 1,
    title: "GPT2 Model",
    category: "Text Generation",
    description: "Fill in the starting text box with a phrase and let AI " +
    "autocomplete it for you. Pretrained Model provided by pytorch-pretrained" +
    "-bert.",
    url: "http://52.35.39.131:1337/text-gen/predict/",
    params: {
      "text": "text",
      "num_words": "number",
      "num_tries": "number"
    },
    output_type: "list_vals"
  }, {
    id: 24,
    title: "Sample Image Classification Model",
    category: "Image Generation",
    description: "Upload image, returns table of classifications (class_name, " +
    "class_description, score)",
    url: "sampleurlhere",
    params: {
      "Text Input 1": "text",
      "Text Input 2": "text",
      "Number Input 1": "number",
      "Data": "data"
    },
    output_type: "list_tups"
  }, {
    id: 53,
    title: "Sample Text Classification Model",
    category: "Text Classification",
    description: "Accepts an array of strings, returns a list of tuples (class_name), " +
    "class_description, score)",
    url: "sampleurlhere",
    params: {
      "Text Input 1": "text",
      "Text Input 2": "text",
      "Number Input 1": "number"
    },
    output_type: "list_tups"
  }, {
    id: 64,
    title: "Sample Object Detection Model",
    category: "Vision Detection",
    description: "Accepts image, returns image with boundary boxes",
    url: "sampleurlhere",
    params: {
      "Text Input 1": "text",
      "Number Input 1": "number",
      "Data": "data"
    },
    output_type: "image"
  }, {
    id: 15,
    title: "Sample Style Transfer Model",
    category: "Image Generation",
    description: "Accepts image, returns style transferred image",
    url: "sampleurlhere",
    params: {
      "Text Input 1": "text",
      "Text Input 2": "text",
      "Data": "data"
    },
    output_type: "image"
  }];
