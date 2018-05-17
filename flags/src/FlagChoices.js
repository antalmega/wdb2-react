import React from 'react';
import StyledButton from './StyledButton'
import './FlagChoices.css';

const FlagChoices = props => {
  let options = props.options || [];
  let {handleChange, handleSubmit} = props;
  let inputs = options.map(opt => (
    <label key={opt.id}>
      <input type="radio"
             value={opt.id}
             onChange={handleChange}
             name="flag-choice" />
      {opt.name}
    </label>
  ));

  return (
    <div class="form-container">
      <form className="flag-form" onSubmit={handleSubmit}>
        {inputs}
        <StyledButton text="GUESS" type="submit" />
      </form>
    </div>
  );
};

export default FlagChoices;