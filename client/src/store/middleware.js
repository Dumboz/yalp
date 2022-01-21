import { createStore } from 'redux';
import thunk from 'redux-thunk';

const Store = {
  getState() {},
  dispatch(action) {},
  subscribe(listener) {},
};

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

function applyMiddleware(...middlewares) {
  return (createStore) =>
    (...args) => {
      // 여기는 기존 우리 Store를 재구성 하는 것임
      // -> applyMiddleware에서 액션을 중간에 다르게 처리하기 위해
      const store = createStore(...args);

      let dispatch = () => {
        throw new Error(
          // 미들웨어를 구성하는 동안에는 디스패치가 허용되지 않습니다.
          // 다른 미들웨어는 이 발송에 적용되지 않습니다.
          'Dispatching while constructing your middleware is not allowed. ' +
            'Other middleware would not be applied to this dispatch.'
        );
      };

      // Store임
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args),
      };

      // 여기서 middleware가 thunk.
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));

      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
}

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);
    let returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
}

const reducer = (state, action) => {};

const callApplyMid = applyMiddleware(logger);
const callCallApplyMid = callApplyMid(createStore);
const storeAndDispatch = callCallApplyMid(reducer);
