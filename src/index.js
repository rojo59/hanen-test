import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './redux/configureStore';
import createBrowserHistory from 'history/createBrowserHistory';

// Components
import Layout from './components/Layout';
import App from './components/App';

const history = createBrowserHistory();
const store = configureStore(undefined, history);

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
