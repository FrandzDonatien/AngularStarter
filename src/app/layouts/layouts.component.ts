import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];

  ngOnDestroy(): void {
    
  }


  ngOnInit(): void {
    
  }

}
