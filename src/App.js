import './App.css';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from 'history';
import AllRouter from "./routes";
import { Provider } from "react-redux";

export const history = createBrowserHistory();

const logMiddlewares = process.env.NODE_ENV === 'development' ? [createLogger({collapsed: true})] : [];

const middleWares = [...logMiddlewares];

const store = createStore(compose(applyMiddleware(...middleWares)));

function App() {
  return <Provider store={store}>
    <AllRouter/>;
  </Provider>
}

export default App;
