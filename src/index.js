import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

//1. create the ACTIONS:
//Actions are functions that returns an object. Usually you are gonna se the name of the actions as the TYPE property of the returned
//object. It's convention.

//ACTION increase counter:
const increment = () => ({ type: "INCREMENT" });

//ACTION decrease counter:
const decrement = () => ({ type: "DECREMENT" });

//2. create the REDUCERS:
//We need to add 2 parameters to the reducer. The first one is our initial state and how it's gonna look like. In this case, it's gonna be a zero,
//Because we start a counter in the 0 state.
//The second parameter of the reducer it's gonna be an action.
//Then, what we can do is switch the action depending on his name (TYPE).
const initialCounter = 0;
const counter = (state = initialCounter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

//3. create the STORE:
//You can create the STORE in this file, or you can make a store.js inside the src folder of your react app to create the globalized store.
//In order to create the store, you have to save it in a variable which applies the function createStore. createStore takes the reducer as input.
const store = createStore(counter);

//Display it in the console:
store.subscribe(() => {
  console.log(store.getState());
});

//4. Finally, in order to execute the action, we need to add a DISPATCH:
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById("root"));

//Theory:
//1. The first thing i'll need is a STORE. A Store is like a globalized state.
//2. The second need i'll need are ACTIONS. Describes what you want to do.
//We are building some basic counter state. You can increment or decrement the number of the counter. So, some ACTIONS could be:
//increment, decrement, etc.
//3. This third thing i'll need are REDUCERS. Reducers describes how your actions transform your current state into your next state.

//Action is gonna be called. Then, reduced is gonna check which action got called, and depending on the action gonna update the state somehow (the globalized state).
//The checking of the action executed is done with a switch statement.

//4. The fourth thing i'll need is DISPATCH. Dispatch is a way to send the action to the reducer. The action gets fired, the dispatch send that action to the reducer
//The reducer checks what action got called and depending on the action update the state somehow.
