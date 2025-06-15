import { Helmet } from 'react-helmet';
import { createRoot } from 'react-dom/client';
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
  const root = createRoot(document.getElementById('root'));
  const router = createBrowserRouter(routes, {
    basename: getBasename(),
  });

  root.render(
    <AppProvider>
      <Helmet>
        <link rel="shortcut icon" href={getAppConfig('openedxAuthn').FAVICON_URL as string} type="image/x-icon" />
      </Helmet>
      <RouterProvider router={router} />
    </AppProvider>
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root'));
  root.render(<ErrorPage message={error.message} />);
});

initialize({
  messages,
});
