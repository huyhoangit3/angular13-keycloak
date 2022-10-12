
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8588/',
                realm: 'first-realm',
                clientId: 'first-client',
                // clientSecret: 'ZniGcEdXyNI34LYeNnOaFClh3miyIXxz'
            },
            initOptions: {
                checkLoginIframe: true,
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
}
