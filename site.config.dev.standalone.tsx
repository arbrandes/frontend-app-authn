import { EnvironmentTypes, SiteConfig } from '@openedx/frontend-base';

import './src/index.scss';

const config: SiteConfig = {
  apps: [],

  appId: 'openedxAuthn',
  environment: EnvironmentTypes.DEVELOPMENT,
  baseUrl: 'http://apps.local.openedx.io:8080',
  lmsBaseUrl: 'http://local.openedx.io:8000',
  siteName: 'My Open edX Site',
  mfeConfigApiUrl: 'http://apps.local.openedx.io:8080/api/mfe_config/v1',
  loginUrl: 'http://local.openedx.io:8000/login',
  logoutUrl: 'http://local.openedx.io:8000/logout',

  custom: {
    appId: 'openedxAuthn',
    MARKETING_SITE_BASE_URL: 'http://local.openedx.io:8000',
    LOGO_URL: 'https://edx-cdn.org/v3/default/logo.svg',
    LOGO_TRADEMARK_URL: 'https://edx-cdn.org/v3/default/logo-trademark.svg',
    LOGO_WHITE_URL: 'https://edx-cdn.org/v3/default/logo-white.svg',
    FAVICON_URL: 'https://edx-cdn.org/v3/default/favicon.ico',
    SESSION_COOKIE_DOMAIN: 'local.openedx.io',
    USER_RETENTION_COOKIE_NAME: '',
    // Features
    ALLOW_PUBLIC_ACCOUNT_CREATION: true,
    DISABLE_ENTERPRISE_LOGIN: true,
    ENABLE_AUTO_GENERATED_USERNAME: false,
    ENABLE_DYNAMIC_REGISTRATION_FIELDS: false,
    ENABLE_PROGRESSIVE_PROFILING_ON_AUTHN: false,
    MARKETING_EMAILS_OPT_IN: '',
    SHOW_CONFIGURABLE_EDX_FIELDS: false,
    SHOW_REGISTRATION_LINKS: true,
    ENABLE_IMAGE_LAYOUT: false,
    // Links
    ACTIVATION_EMAIL_SUPPORT_LINK: null,
    AUTHN_PROGRESSIVE_PROFILING_SUPPORT_LINK: null,
    LOGIN_ISSUE_SUPPORT_LINK: null,
    PASSWORD_RESET_SUPPORT_LINK: null,
    POST_REGISTRATION_REDIRECT_URL: '',
    PRIVACY_POLICY: null,
    SEARCH_CATALOG_URL: null,
    TOS_AND_HONOR_CODE: null,
    TOS_LINK: null,
    // Base container images
    BANNER_IMAGE_LARGE: '',
    BANNER_IMAGE_MEDIUM: '',
    BANNER_IMAGE_SMALL: '',
    BANNER_IMAGE_EXTRA_SMALL: '',
    // Miscellaneous
    INFO_EMAIL: '',
  }
};

export default config;
