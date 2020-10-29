import React from "react";

const Option = (props) => (
  <div class='option'>
    <p className='option__text'>
      {props.count}. {props.optionText}
    </p>
    <button
      className='button button--link'
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
