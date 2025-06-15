import { Provider as ReduxProvider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@openedx/frontend-base';

import {
  registerIcons,
} from './common-components';
import configureStore from './data/configureStore';

import './sass/_style.scss';

registerIcons();

const Main = () => (
  <AppProvider appId="org.openedx.frontend.app.authn">
    <ReduxProvider store={configureStore()}>
      <Outlet />
    </ReduxProvider>
  </AppProvider>
);

export default Main;
