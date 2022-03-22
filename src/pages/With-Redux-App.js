import React, { useState } from 'react';
import './With-Redux-App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(currentState, action) {
  // 기존 state 값이 undefined 인 경우, 즉 없는 경우 초기값을 설정해주는 조건문이다.
  if (currentState === undefined) {
    return {
      number: 1,
    }
  }
  // const newState = Object.assign({}, currentState); 와 동일하다.
  // 기존 state 값의 복사본을 만드는 것이다.
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

function WithReduxApp() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        {/* state 를 어떤 컴포넌트에 제공할 것인지 범위를 결정하는 울타리가 Provider 이다. */}
        {/* Provider 는 반드시 props 를 설정해줘야 한다. */}
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  )
}

function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  )
}

function Left3(props) {
  // useSelector 는 state 값을 호출하는 함수로, 반드시 함수를 인자로 갖는다.
  // 예를 들어, 아래와 같이 작성한 경우 state 중에서 number 라는 속성에 해당하는 값을 호출할 수 있다.
  const number = useSelector(state => state.number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  )
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  )
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  )
}

function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        dispatch({ type: 'PLUS' })
      }}></input>
    </div>
  )
}

export default WithReduxApp;
