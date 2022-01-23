import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

let reducer = combineReducers(reducers);
// applyMiddleware supercharges createStore with middleware:
let store = createStore(reducer, applyMiddleware(thunk));

function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce');
}

function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce,
  };
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error,
  };
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount,
  };
}

// Even without middleware, you can dispatch an action:
store.dispatch(withdrawMoney(100));

function makeASandwichWithSecretSauce(forPerson) {
  return function (dispatch) {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

store.dispatch(makeASandwichWithSecretSauce('Me'));

store.dispatch(makeASandwichWithSecretSauce('My wife')).then(() => {
  console.log('Done!');
});

function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (!getState().sandwiches.isShopOpen) {
      return Promise.resolve();
    }

    return dispatch(makeASandwichWithSecretSauce('My Grandma'))
      .then(() =>
        Promise.all([
          dispatch(makeASandwichWithSecretSauce('Me')),
          dispatch(makeASandwichWithSecretSauce('My wife')),
        ])
      )
      .then(() => dispatch(makeASandwichWithSecretSauce('Our kids')))
      .then(() =>
        dispatch(
          getState().myMoney > 42
            ? withdrawMoney(42)
            : apologize('Me', 'The Sandwich Shop')
        )
      );
  };
}
