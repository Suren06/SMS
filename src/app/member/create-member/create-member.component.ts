import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/model/member.model';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  member:Member = new Member();
  constructor(private memberService:MemberService, private router:Router) { }
  submitted=false;

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.submitted = true;
    this.memberService.createMember(this.member)
    .subscribe(data => console.log(data), error => console.log(error));
    this.member = new Member();
    this.router.navigate(['/members']);
  }
}
