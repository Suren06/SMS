import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { UpdateMemberComponent } from './member/update-member/update-member.component';
import { MemberListComponent } from './member/member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    UpdateMemberComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
