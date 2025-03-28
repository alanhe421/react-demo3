import './App.css';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from 'history';
import AllRouter from "./routes";
import { Provider } from "react-redux";
import createRootReducer from "./reducers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const history = createBrowserHistory();

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const logMiddlewares = process.env.NODE_ENV === 'development' ? [createLogger({ collapsed: true })] : [];

const middleWares = [...logMiddlewares];

const store = createStore(createRootReducer, compose(applyMiddleware(...middleWares)));
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      gcTime: 1000 * 60,
      staleTime: 1000 * 60
    }
  }
})

function App() {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AllRouter />
    </QueryClientProvider>
  </Provider>
}

export default App;
