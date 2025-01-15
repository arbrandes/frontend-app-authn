import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  APP_INIT_ERROR, APP_READY,
  AppProvider,
  ErrorPage,
  getBasename,
  initialize,
  subscribe
} from '@openedx/frontend-base';

import { getAppConfig } from '@openedx/frontend-base/runtime/config';
import messages from './i18n';
import routes from './routes';

subscribe(APP_READY, () => {
  const router = createBrowserRouter(routes, {
    basename: getBasename(),
  });

  ReactDOM.render(
    <AppProvider>
      <Helmet>
        <link rel="shortcut icon" href={getAppConfig('openedxAuthn').FAVICON_URL as string} type="image/x-icon" />
      </Helmet>
      <RouterProvider router={router} />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});
