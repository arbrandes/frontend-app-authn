import { getAppConfig } from '@openedx/frontend-base';
import algoliasearch from 'algoliasearch';

// initialize Algolia workers
const initializeSearchClient = () => algoliasearch(
  getAppConfig('openedxAuthn').ALGOLIA_APP_ID,
  getAppConfig('openedxAuthn').ALGOLIA_SEARCH_API_KEY,
);

const getLocationRestrictionFilter = (userCountry) => {
  if (userCountry) {
    return `NOT blocked_in:"${userCountry}" AND (allowed_in:"null" OR allowed_in:"${userCountry}")`;
  }
  return '';
};

export {
  getLocationRestrictionFilter, initializeSearchClient
};
