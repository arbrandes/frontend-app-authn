import { getAppConfig } from '@openedx/frontend-base';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  registerIcons,
  Zendesk
} from './common-components';
import configureStore from './data/configureStore';

import './sass/_style.scss';

registerIcons();

const MainApp = () => (
  <Provider store={configureStore()}>
    {getAppConfig('openedxAuthn').ZENDESK_KEY && <Zendesk />}
    <Outlet />
  </Provider>
);

export default MainApp;
