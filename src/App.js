import logo from './logo.svg';
import './App.css';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from "redux";
import { HelloPage } from "./hello";
import { Provider } from "react-redux";

const logMiddlewares = process.env.NODE_ENV === 'development' ? [createLogger({collapsed: true})] : [];

const middleWares = [...logMiddlewares];

const store = createStore(compose(applyMiddleware(...middleWares)));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Provider store={store}>
        <HelloPage/>
      </Provider>
    </div>
  );
}

export default App;
