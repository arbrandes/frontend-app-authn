import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  registerIcons,
} from './common-components';
import configureStore from './data/configureStore';

import './sass/_style.scss';

registerIcons();

const MainApp = () => (
  <Provider store={configureStore()}>
    <Outlet />
  </Provider>
);

export default MainApp;
