import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHTTPservice } from './auth-http.service';
import { environment } from '../../../../environments/environment.dev';
import { BehaviorSubject, finalize, map, Observable, Subscription } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { HttpResponseModel } from '../../../models/http-response.model';


export type UserType = UserModel | undefined;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  
  // public fields
  isLoading$: Observable<boolean>;
  currentUser$: Observable<UserType>;
  isLoadingSubject: BehaviorSubject<boolean>;
  currentUserSubject: BehaviorSubject<UserType>;
  // currentUserRole: BehaviorSubject<string[]>;
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor(
    private authHttpService: AuthHTTPservice,
    private router: Router,
  ) {
    // this.currentUserRole = new BehaviorSubject<string[]>([]);
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);
  }



  get currentUserValue(): UserType {
    return undefined;
  }


  logout = () =>{

  }

  getUserByToken = () : Observable<UserType> =>{
    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken().pipe(
      map((response: HttpResponseModel<UserModel>) => {
        if (response.data) {
          // const roles = response.data.roles.map((r) => r.name);
          // this.currentUserRole.next(roles);
          this.currentUserSubject.next(response.data);
        } else {
          this.logout();
        }
        return response.data;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => sub.unsubscribe());
  }


}
