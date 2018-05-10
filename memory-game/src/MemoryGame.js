import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';

const CardState = {
    HIDING: 0,
    SHOWING: 1,
    MATCHING: 2
}

class MemoryGame extends Component {
    constructor(props) {
        super(props);
        
        let cards = [
            {id: 0, cardState: CardState.HIDING, backgroundColor: 'darkred'},
            {id: 1, cardState: CardState.HIDING, backgroundColor: 'darkred'},
            {id: 2, cardState: CardState.HIDING, backgroundColor: 'royalblue'},
            {id: 3, cardState: CardState.HIDING, backgroundColor: 'royalblue'},
            {id: 4, cardState: CardState.HIDING, backgroundColor: 'teal'},
            {id: 5, cardState: CardState.HIDING, backgroundColor: 'teal'},
            {id: 6, cardState: CardState.HIDING, backgroundColor: 'gold'},
            {id: 7, cardState: CardState.HIDING, backgroundColor: 'gold'},
            {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
            {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
            {id: 10, cardState: CardState.HIDING, backgroundColor: 'blueviolet'},
            {id: 11, cardState: CardState.HIDING, backgroundColor: 'blueviolet'},
            {id: 12, cardState: CardState.HIDING, backgroundColor: 'lightsalmon'},
            {id: 13, cardState: CardState.HIDING, backgroundColor: 'lightsalmon'},
            {id: 14, cardState: CardState.HIDING, backgroundColor: 'lavender'},
            {id: 15, cardState: CardState.HIDING, backgroundColor: 'lavender'}            
        ];
        
        cards = shuffle(cards);
        this.state = {cards, disableClick: false};
        
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleNewGame() {
      let cards = this.state.cards.map(c => ({
        ...c,
        cardState: CardState.HIDING
      }));
      cards = shuffle(cards);
      this.setState({cards});
    }
    
    handleClick(id) {
      /*this.setState(prevState => {
        let cards = prevState.cards.map(c => (
          c.id === id ? {
            ...c,
            cardState: c.cardState === CardState.HIDING ? CardState.MATCHING : CardState.HIDING
          } : c
        ));
        return {cards};
      });*/
      
      let clickedCard = this.state.cards.find(c => c.id === id);
      
      if (this.state.disableClick || clickedCard.cardState !== CardState.HIDING) return;
      
      let cards = this.state.cards.map(c => (
        c.id === id ? {
          ...c,
          cardState: c.cardState === CardState.HIDING ? CardState.SHOWING : CardState.HIDING
        } : c
      ));
      
      let selectedCards = cards.filter(c => c.cardState === CardState.SHOWING);
      
      if (selectedCards.length === 2 &&
          selectedCards[0].backgroundColor === selectedCards[1].backgroundColor) {
        cards = cards.map(c => c.cardState === CardState.SHOWING ? {...c, cardState: CardState.MATCHING} : c);
      } else if (selectedCards.length === 2) {
        let hideCards = cards.map(c => c.cardState === CardState.SHOWING ? {...c, cardState: CardState.HIDING} : c);
        let disableClick = true;
        
        this.setState({cards, disableClick}, () => {
          setTimeout(() => {
            this.setState({cards: hideCards, disableClick: false});
          }, 1500);
        });
        return;
      }
      
      this.setState({cards});
    }
    
    render() {
      const cards = this.state.cards.map((card) => (
        <Card
          Key={card.id}
          showing={card.cardState !== CardState.HIDING}
          backgroundColor={card.backgroundColor}
          onClick={() => this.handleClick(card.id)}
        />
      ));
      
      return (
      <div>
        <Navbar onNewGame={this.handleNewGame} />
        {cards}
      </div>
      );
    }
}

export default MemoryGame;