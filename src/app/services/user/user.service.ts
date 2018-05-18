import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private _rootURL: string = 'http://jsonplaceholder.typicode.com/users';
  private _rootURL = 'http://jsonplaceholder.typicode.com/users';

  private users: IUser[] = [
    { 'id': 1, 'name': 'Leanne Graham', 'email': 'Sincere@april.biz', 'website': 'hildegard.org' },
    { 'id': 2, 'name': 'Ervin Howell', 'email': 'Shanna@melissa.tv', 'website': 'anastasia.net' },
    { 'id': 3, 'name': 'Clementine Bauch', 'email': 'Nathan@yesenia.net', 'website': 'ramiro.info' },
    { 'id': 4, 'name': 'Patricia Lebsack', 'email': 'Julianne.OConner@kory.org', 'website': 'kale.biz' },
    { 'id': 5, 'name': 'Chelsey Dietrich', 'email': 'Lucio_Hettinger@annie.ca', 'website': 'demarco.info' },
    { 'id': 6, 'name': 'Mrs. Dennis Schulist', 'email': 'Karley_Dach@jasper.info', 'website': 'ola.org' },
    { 'id': 7, 'name': 'Kurtis Weissnat', 'email': 'Telly.Hoeger@billy.biz', 'website': 'elvis.io' },
    { 'id': 8, 'name': 'Nicholas Runolfsdottir V', 'email': 'Sherwood@rosamond.me', 'website': 'jacynthe.com' },
    { 'id': 9, 'name': 'Glenna Reichert', 'email': 'Chaim_McDermott@dana.io', 'website': 'conrad.com' },
    { 'id': 10, 'name': 'Clementina DuBuque', 'email': 'Rey.Padberg@karina.biz', 'website': 'ambrose.net' }
  ];

  constructor(private http: HttpClient) { }

  getUsers(): IUser[] {
    return this.users;
  }

  getUsersByRest(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._rootURL);
  }

  getUserById(id: number): IUser {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserByIdViaRest(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this._rootURL}/${id}`);
  }
}
