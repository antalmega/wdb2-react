import React, {Component} from 'react';

class HobbyList extends Component {
    render() {
        const hobbies = ["Dancing", "Sport", "Eating"];
        const liStyle = {fontSize: '1.5em'};
        return (
        <ul>
            {hobbies.map((hobbie, i) => {
              return <li key={i} style={liStyle}>{hobbie}</li>
            })}
        </ul>
        );
    }
}

export default HobbyList;