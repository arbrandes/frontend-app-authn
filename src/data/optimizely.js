import { getConfig } from '@openedx/frontend-base';
import {
  createInstance,
} from '@optimizely/react-sdk';

const OPTIMIZELY_SDK_KEY = getConfig().custom.OPTIMIZELY_FULL_STACK_SDK_KEY;

const getOptimizelyInstance = () => {
  if (OPTIMIZELY_SDK_KEY) {
    return createInstance({
      sdkKey: OPTIMIZELY_SDK_KEY,
    });
  }

  return null;
};

export default getOptimizelyInstance();
