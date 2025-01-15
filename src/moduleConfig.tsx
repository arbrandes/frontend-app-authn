import { App } from '@openedx/frontend-base';
import routes from './routes';

// If a repo exposes multiple apps, 'site.config' could expose an object of individual AppConfigs
// keyed by the appId.  Then a file like this, setting up an App, would grab the AppConfig it needs
// out of the object from site.config.  This is needed for module projects too, as they may consolidate multiple apps into one remote deployment.
import appConfig from 'site.config';

console.log(appConfig);

const config: App = {
  routes,
  slots: [],
  config: {
    appId: '',
    ...appConfig,
  }
};

export default config;
