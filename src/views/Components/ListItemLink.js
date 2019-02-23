import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

class ListItemLink extends Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary, secondary} = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText inset primary={primary} secondary={secondary} />
        </ListItem>
      </li>
    );
  }
}

export default ListItemLink;
