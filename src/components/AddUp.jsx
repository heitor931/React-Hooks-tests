import React from "react";
import { useReducer } from "react";
import classes from "./add.module.scss";
import { reducer } from "./AddUpReducer";


const AddUp = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <div className={state.color ? classes.add : ""}>
      <div>{state.count}</div>
      <div>
        <input
        value={state.userInput}
          type="text"
          onChange={(e) =>
            dispatch({ type: "newUserInput", payload: e.target.value })
          }
          id=""
        />
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "changeColor" })}>
          change the color
        </button>
        <div className={classes.text}>{state.userInput}</div>
      </div>
    </div>
  );
};

export default AddUp;
