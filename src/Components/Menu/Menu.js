import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  changeMenu = (id) => {
    
    this.handleClose();
  }

  render() {
    const { anchorEl } = this.state;

    return (
        
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to='/'><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
          <Link to="/AddUser"><MenuItem onClick={this.handleClose}>Add User</MenuItem></Link>
          <Link to="/SearchUser"><MenuItem onClick={this.handleClose}>Search User</MenuItem></Link>
        </Menu>
        <br />
        <br />
      </div>
    );
  }
}

export default SimpleMenu;

