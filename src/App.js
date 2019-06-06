import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import CanvasComponent from './components/CanvasComponent';
import Sliders from './components/Controls';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware),);
sagaMiddleware.run(sagas);

function App() {
  return (
    <Provider store = {store}>
        <CanvasComponent />
        <Sliders />
    </Provider>
  );
}

export default App;

window.store = store;
