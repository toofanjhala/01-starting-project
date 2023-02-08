import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import '../../UI/Button/Button.css'

const CourseInput = props => {
  const [isvalid,setisvalid]=useState(true)
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0){
        setisvalid(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
          setisvalid(false)
          return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isvalid ? "invalid" : ""}, button ${!isvalid ? "invalid" : ""}`} >
     
     
        <label >Course Goal </label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
