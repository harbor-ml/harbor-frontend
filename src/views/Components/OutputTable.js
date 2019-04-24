import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

// Table Component
const tableStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const { classes } = props;
  const { output } = props;
  const { colNames } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          {colNames.map((colName, index) => {
            if (index===colNames.length - 1) {
              return (<TableCell align="right" key={index}>{colName}</TableCell>);
            } else {
              return (<TableCell component="th" key={index}>{colName}</TableCell>);
            }
          })}
          </TableRow>
        </TableHead>
        <TableBody>
          {output.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row[1]}
                </TableCell>
                <TableCell align="right">{row[2]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const OutputTable = withStyles(tableStyles)(SimpleTable);

export default OutputTable;
