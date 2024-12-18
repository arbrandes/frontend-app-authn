import { AppProvider, getConfig } from '@openedx/frontend-base';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  registerIcons,
  Zendesk
} from './common-components';
import configureStore from './data/configureStore';

registerIcons();

const MainApp = () => (
  <AppProvider>
    <Provider store={configureStore()}>
      <Helmet>
        <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
      </Helmet>
      {getConfig().custom.ZENDESK_KEY && <Zendesk />}
      <Outlet />
    </Provider>
  </AppProvider>
);

export default MainApp;
