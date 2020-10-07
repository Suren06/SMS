import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { environment } from 'src/environments/environment';
import { Member } from '../model/member.model';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl+'/api/members/';

  getMembers() : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getMembersById(id: number): Observable<any>{
    return this.http.get(this.baseUrl + id);
  }

  createMember(member: Member): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl, member);
  }

  updateMember(id: number, member: Member): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(this.baseUrl + member.id, member);

  }

  deleteMember(id: number, member: Member): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

}
