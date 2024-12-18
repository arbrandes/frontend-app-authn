import { createBrowserRouter, Navigate } from 'react-router-dom';

import { getBasename } from '@openedx/frontend-base';
import MainApp from '../MainApp';
import { EmbeddedRegistrationRoute, NotFoundPage, UnAuthOnlyRoute } from '../common-components';
import {
  LOGIN_PAGE, PAGE_NOT_FOUND
} from '../data/constants';
import { ForgotPasswordPage } from '../forgot-password';
import Logistration from '../logistration/Logistration';
import { ProgressiveProfiling } from '../progressive-profiling';
import { RecommendationsPage } from '../recommendations';
import { RegistrationPage } from '../register';
import { ResetPasswordPage } from '../reset-password';

export default function createRouter() {
  return createBrowserRouter([
    {
      id: 'authn',
      path: '/',
      Component: MainApp,
      children: [
        {
          path: 'register-embedded',
          element: (
            <EmbeddedRegistrationRoute><RegistrationPage /></EmbeddedRegistrationRoute>
          )
        },
        {
          path: 'login',
          element: (
            <UnAuthOnlyRoute><Logistration selectedPage={LOGIN_PAGE} /></UnAuthOnlyRoute>
          )
        },
        {
          path: 'register',
          element: (
            <UnAuthOnlyRoute><Logistration /></UnAuthOnlyRoute>
          ),
        },
        {
          path: 'reset',
          element: (
            <UnAuthOnlyRoute><ForgotPasswordPage /></UnAuthOnlyRoute>
          ),
        },
        {
          path: 'password_reset_confirm/:token',
          element: (
            <ResetPasswordPage />
          ),
        },
        {
          path: 'welcome',
          element: (
            <ProgressiveProfiling />
          ),
        },
        {
          path: 'recommendations',
          element: (
            <RecommendationsPage />
          ),
        },
        {
          path: 'notfound',
          element: (
            <NotFoundPage />
          ),
        },
        {
          path: '*',
          element: (
            <Navigate replace to={PAGE_NOT_FOUND} />
          ),
        }
      ]
    }
  ], {
    basename: getBasename(),
  });
}
