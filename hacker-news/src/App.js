import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }
  
  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
    
    fetch(topStories)
      .then(data => data.json())
      .then(data => data.map(id => {
        const url = `${storyUrlBase}${id}.json`;
        return fetch(url).then(d => d.json());
      }))
      .then(promises => {
        promises.map(async promise => {
          let story = await promise;
          return this.setState(prevState => ({stories: [...prevState.stories, story]}))
        });
      });
  }
  
  render() {
    let views = <div>Loading...</div>;
    const {stories} = this.state;
    if (stories && stories.length > 0) {
      views = stories.map(s => (
        <p key={s.id}>
          <a href={s.url}>{s.title}</a> from <strong>{s.by}</strong>
        </p>
      ));
    }
    
    return (
      <div className="App">
        <h2>Hackers News Top Stories</h2>
        {/* {JSON.stringify(this.state.stories)} */}
        {views}
      </div>
    );
  }
}

export default App;
