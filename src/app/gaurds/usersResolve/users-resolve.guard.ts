import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { IUser } from '../../interfaces/user';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements CanActivate, Resolve<IUser[]> {

  constructor( private userService: UserService ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): IUser[] {
    return this.userService.getUsers();
  }
}
