import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    opacity: 0.9,
    color: theme.palette.text.secondary,
    height: 200,
    textDecoration: "None",
    '&:hover': {
      opacity: 1
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  }
});

class UploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onUpload = this.onUpload.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      files: []
    }
  }

  onUpload(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({
        files: [...this.state.files, {
          file: reader.result
        }]
      });
      this.props.handleImageUpload(reader.result);
    }

    reader.readAsDataURL(file)
  }

  deleteData(file) {
    this.setState({
      files: this.state.files.filter((val) => {
        return val !== file
      })
    });
  }

  render() {
    const { classes } = this.props;

    const data = this.state.files.map((val, index) => {
      return (
        <Grow
          key={index}
          in={this.state.files.length > 0}
          style={{
            transformOrigin: '0 0 0',
         }}
         {...(this.state.files.length > 0 ? { timeout: index*100 + 100 } : {})}
        >
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <IconButton className={classes.button} aria-label="Delete" onClick={(e) => this.deleteData(val)}>
              <DeleteIcon />
            </IconButton>
            <Paper className={classes.paper}>
              <img src={val.file} alt="pic" style={{maxHeight: "150px", maxWidth: "150px"}}/>
            </Paper>
          </Grid>
        </Grow>
      )
    })

    return (
      <div>
        <Button variant="outlined" component="label" color="default" className={classes.button}>
          <input type="file" style={{display: "None"}} onChange={(e) => this.onUpload(e)}/>
          Upload Files <CloudUploadIcon className={classes.rightIcon} />
        </Button>
        <Grid container spacing={24}>
          {data}
        </Grid>
      </div>
    )
  }
}

UploadComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadComponent);
