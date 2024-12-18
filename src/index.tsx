import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import {
  APP_INIT_ERROR, APP_READY,
  ErrorPage,
  initialize,
  subscribe
} from '@openedx/frontend-base';

import messages from './i18n';
import createRouter from './router/createRouter';

subscribe(APP_READY, () => {
  const router = createRouter();

  ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});
