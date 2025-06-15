import { getAuthenticatedHttpClient, getConfig } from '@openedx/frontend-base';

export async function patchAccount(username, commitValues) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/merge-patch+json' },
  };

  await getAuthenticatedHttpClient()
    .patch(
      `${getConfig().lmsBaseUrl}/api/user/v1/accounts/${username}`,
      commitValues,
      requestConfig,
    )
    .catch((error) => {
      throw (error);
    });
}
