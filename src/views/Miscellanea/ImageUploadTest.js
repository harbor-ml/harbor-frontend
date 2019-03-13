import React from 'react';
import ImageUploader from 'react-images-upload';

class ImgUploader extends React.Component {

    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        var blobArr = [];
        blobArr.push(picture);
        const picURL = window.URL.createObjectURL(new Blob(blobArr, {type: "image/png"}));
        this.setState({
            pictures: this.state.pictures.concat(picURL)
        });
    }

    render() {
      const imgs = this.state.pictures.map((val, index) => {
        return (
          <div key={index}>
            <img src={val} alt={"picture"} />
          </div>
        )
      });

      return (
          <div>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            {imgs}
          </div>
      );
    }
}

export default ImgUploader;
