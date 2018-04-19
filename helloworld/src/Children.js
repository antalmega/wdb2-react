import React, {Component} from 'react';
import './Children.css';
import HobbyList from './HobbyList';

class Children extends Component {
  render() {
    return (
      <div className="card">
        <h2 className="name">My Children in 2002</h2>
        <img src="https://github.com/antalmega/MyChildren2002/raw/master/MyChildren2002.jpg"
             alt="My children" />
        <h5 style={{fontSize: '2em', margin: '2px'}} >Hobbies:</h5>
        < HobbyList />
      </div>
    )
  }
}

export default Children;