import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowY: 'hidden'
  },
  gridList: {
    width: '90%',
    height: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tile: {
    backgroundColor: theme.palette.background.paper
  }
});

const Dashboard = (props) => {
  const { classes } = props;

  const randomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} cols={3} spacing={4} className={classes.gridList}>
        {randomList.map(data =>
          <GridListTile className={classes.tile} cols={1} rows={1} key={data}>
            <Typography variant="h4" color="inherit" noWrap>A Model</Typography>
            <GridListTileBar
              title={"Model"}
              subtitle={data}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
