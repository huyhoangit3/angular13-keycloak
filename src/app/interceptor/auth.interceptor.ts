import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, lastValueFrom, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // convert promise to observable using 'from' operator
    return from(this.handle(req, next))
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    // if your getAuthToken() function declared as "async getAuthToken() {}"
    const authToken = await this.keycloakService.getToken()
    // console.log(authToken);
    

    // if your getAuthToken() function declared to return an observable then you can use
    // await this.auth.getAuthToken().toPromise()

    const authReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken
      }
    })

    return await lastValueFrom(next.handle(authReq));
  }
}
