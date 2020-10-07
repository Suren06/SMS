import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { UpdateMemberComponent } from './member/update-member/update-member.component';

const routes: Routes = [
  {path: '', redirectTo: 'member', pathMatch: 'full'},
  {path: 'add', component:CreateMemberComponent},
  {path: 'members', component:MemberListComponent},
  {path: 'update/:id', component: UpdateMemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
