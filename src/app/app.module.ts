import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartModule } from './cart/cart.module';
import { ChatComponent } from './components/chat/chat.component';
import { ChildComponent } from './components/child/child.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { ParentComponent } from './components/parent/parent.component';
import { RoutesModule } from './routes/routes.module';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { UserService } from './services/user/user.service';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { BuiltinStrDirComponent } from './components/builtin-str-dir/builtin-str-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageListComponent,
    MessageComponent,
    MessageListComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent,
    OneComponent,
    TwoComponent,
    BuiltinStrDirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
