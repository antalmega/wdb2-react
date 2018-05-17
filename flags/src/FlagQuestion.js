import React, { Component } from 'react';
import FlagChoices from './FlagChoices';
import FlagAnswer from './FlagAnswer';
import './FlagQuestion.css';

const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};

class FlagQuestion extends Component {
  
  static defaultProps = {
    options: []
  }
  
  constructor(props) {
    super(props);
    this.state = {
      userChoice: undefined
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({userChoice: Number(e.target.value)});
  }
  
  handleSubmit(e) {
    this.props.onGuess(this.state.userChoice);
  }
  
  render() {
    const {
      flag,
      questionState,
      options,
      answerText,
      onNext
    } = this.props;
    let output = questionState === QuestionStates.QUESTION ?
      (<FlagChoices
        options={options}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
      />) :
      (<FlagAnswer
        correct={questionState === QuestionStates.ANSWER_CORRECT}
        answer={answerText}
        onNext={onNext}
      />);
    
    return (
      <div>
        {output}
        <img
          className="flag-img"
          src={flag}
          alt="Guess the flag"
        />
      </div>
    );
  }
  
}

export default FlagQuestion;
export { QuestionStates };