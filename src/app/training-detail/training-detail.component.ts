import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Session } from '../models/session.model';

@Component({
  selector: 'tr-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  @Input() session : Session;

  @Output() 
  onNotationChanged = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  notation(data : number) {
    this.onNotationChanged.emit(data);
  }

}
