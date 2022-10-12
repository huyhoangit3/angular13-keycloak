import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  user = '';

  constructor(
    private keycloakService: KeycloakService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions() {
    this.user = this.keycloakService.getUsername();
    this.http.get('http://localhost:8888/demo/admin').toPromise().then(data => console.log(data));
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }
}
