import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../gaurds/auth/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AboutComponent } from '../components/about/about.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { ConfirmationGuard } from '../gaurds/confirmation/confirmation.guard';
import { MessageListComponent } from '../components/message-list/message-list.component';
import { UserService } from '../services/user/user.service';
import { UsersResolveGuard } from '../gaurds/usersResolve/users-resolve.guard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ] },
  { path: 'users', component: UsersComponent, pathMatch: 'prefix',
    // canActivateChild: [ AuthGuard ],
    resolve: {
      users: UsersResolveGuard
    },
    children: [
      { path: ':userId', component: UserDetailsComponent },
      { path: '', component: PlaceholderComponent }
  ]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard, UserService, UsersResolveGuard ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
