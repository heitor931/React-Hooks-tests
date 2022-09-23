

export const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };
      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };
      case "changeColor":
        return {
          ...state,
          color: !state.color,
        };
      case "newUserInput":
        return {
          ...state,
          userInput: action.payload,
        };
      default:
        throw new Error();
    }
  };