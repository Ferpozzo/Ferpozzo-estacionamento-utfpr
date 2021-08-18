import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/models/users/users.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }
  getUsers(_id: string): Observable<any> {
    return this.http.get(environment.backendURL + 'users',
      { headers: environment.http.defaultHttpHeaders });
  }
  getUser(_id: string): Observable<any> {
    return this.http.get(environment.backendURL + 'users/' + _id,
      { headers: environment.http.defaultHttpHeaders });
  }
  createUser(user: UserInterface): Observable<any> {
    return this.http.post(environment.backendURL + 'users/', user,
      { headers: environment.http.defaultHttpHeaders });
  }
  deleteUser(_id: string): Observable<any> {
    return this.http.delete(environment.backendURL + 'users/' + _id + '/',
      { headers: environment.http.defaultHttpHeaders });
  }
  updatePutUser(user: UserInterface): Observable<any> {
    return this.http.put(environment.backendURL + 'users/' + user._id, user,
      { headers: environment.http.defaultHttpHeaders });
  }
  updateUser(user: UserInterface): Observable<any> {
    return this.http.patch(environment.backendURL + 'users/' + user._id, user,
      { headers: environment.http.defaultHttpHeaders });
  }
}
