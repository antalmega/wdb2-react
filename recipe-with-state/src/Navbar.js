import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
    
    static defaultProps = {
      onNewRecipe() {}
    }
    
    static propTypes = {
      onNewRecipe: propTypes.func
    }
    
    render() {
      return(
        <header>
          <h1><a>Recipe App</a></h1>
          <nav>
            <li><a onClick={this.props.onNewRecipe} >New Recipe</a></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact us</a></li>
          </nav>
        </header>
      );
    }
}

export default Navbar;