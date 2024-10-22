import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  //variables
  // isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = [];



  //constructor
  constructor(){

  }

  ngOnInit(): void {
    
  }




  //methode


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  

}
