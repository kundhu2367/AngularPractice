import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private _rootURL: string = 'http://jsonplaceholder.typicode.com/users';
  private _rootURL = 'http://jsonplaceholder.typicode.com/users';
  private _rootPostsURL = 'http://jsonplaceholder.typicode.com/posts';

  // private _prop: string = 'foo';
  private _prop = 'foo';

  public propChanged: BehaviorSubject<string> = new BehaviorSubject<string>(this._prop);

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

  getProp(): string {
    return this._prop;
  }

  setProp(prop: string): void {
    this._prop = prop;
    this.propChanged.next(this._prop);
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUsersByRest(): Observable<IUser[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer your-access-token-here');
    return this.http.get<IUser[]>(this._rootURL, { headers })
      .pipe(
        map (users => {
          return users.map( user => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              website: user.website
            };
          });
        })
      );
  }

  getUserById(id: number): IUser {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserByIdViaRest(id: number): Observable<IUser> | any {
    return this.http.get<IUser>(`${this._rootURL}/${id}`)
      .pipe(
        retry(3),
        catchError(err => {
          console.log(`got an error : ${err}`);
          return err;
        })
      );
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._rootURL, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._rootURL}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._rootURL}/${id}`);
  }

  getUserPosts(id: number): Observable<any> {
    const params = new HttpParams().set('userId', id.toString());
    return this.http.get(this._rootPostsURL, { params });
  }
}
