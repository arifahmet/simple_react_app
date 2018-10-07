import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter} from "react-router-dom";
import config from 'react-global-configuration';
import configuration from './Config/Config';

config.set(configuration);

const alertOptions = {
    position: 'top right',
    timeout: 2500,
    offset: '30px',
    transition: 'scale'
}

const Home = () => (
    <BrowserRouter>
      <Provider template={AlertTemplate} {...alertOptions}>
        <App />
      </Provider>
    </BrowserRouter>
  );

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
