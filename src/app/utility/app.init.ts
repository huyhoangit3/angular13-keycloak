
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8587/',
          realm: 'first-realm',
          clientId: 'first-client',
        },
        initOptions: {
          checkLoginIframe: true,
          checkLoginIframeInterval: 25,
        },
        loadUserProfileAtStartUp: true,
        enableBearerInterceptor: true,
        bearerPrefix: 'Bearer',
      });
}
