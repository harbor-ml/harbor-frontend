import React from 'react';
import ImageUploader from 'react-images-upload';

class ImgUploader extends React.Component {

    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
      console.log(picture);
        this.setState({
          picture: [...this.state.pictures, picture]
        })
    }

    render() {
      return (
            <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
      );
    }
}

export default ImgUploader;
