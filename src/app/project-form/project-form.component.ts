import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session.model';
import { Referentiel } from '../models/referentiel.model';
import { IComparable } from '../models/i.comparable.model';
import { FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  private dataList = new Array<Referentiel>(); 
  private dataList2 = new Array<Referentiel>(); 

  private selectValue : Referentiel = new Referentiel(2, 'R2', 'Referentiel 2');
    private selectValue2 : Referentiel = new Referentiel(7, 'R7', 'Referentiel 7');
  private formulaire : FormGroup;
  private selectInput : AbstractControl;
  
  constructor(fb : FormBuilder) { 
    this.formulaire = fb.group({
      'selectInput' : [this.selectValue],
      'selectInput2' : [this.selectValue2]
    });
  };


  ngOnInit() {
    
    for (let i : number = 1; i <= 3; i++) {
      let referentiel : Referentiel = new Referentiel(i, `R${i}`, `Referentiel ${i}`);
      let referentiel2 : Referentiel = new Referentiel(i+5, `R${i+5}`, `Referentiel ${i+5}`);
      this.dataList.push(referentiel);
      this.dataList2.push(referentiel2);
    }

  }

  onSubmit() { 
    console.log(this.formulaire.value);
  }
}
