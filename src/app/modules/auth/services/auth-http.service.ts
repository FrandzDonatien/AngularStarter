import { HttpClient } from "@angular/common/http";
import { BaseHttpService } from "../../../services/base.http.service";
import { Observable } from "rxjs";
import { UserModel } from "../../../models/user.model";
import { HttpResponseModel } from "../../../models/http-response.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPservice extends BaseHttpService{
  
  //constructor
  constructor(private http: HttpClient){
    super();
  }



  getUserByToken = (): Observable<HttpResponseModel<UserModel>> => {
    return this.http.post<HttpResponseModel<UserModel>>(``,{},{
      headers: this.httpHeader()
    })
  }


}