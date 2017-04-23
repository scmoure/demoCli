import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session.model';
import { Referentiel } from '../models/referentiel.model';
import { IComparable } from '../models/i.comparable.model';
import { FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export abstract class ProjectFormComponent implements OnInit {

  protected dataList = new Array<Referentiel>();
  protected dataList2 = new Array<Referentiel>();

  private selectValue: Referentiel = new Referentiel(2, 'R2', 'Referentiel 2');
  private selectValue2: Referentiel = new Referentiel(7, 'R7', 'Referentiel 7');
  protected defaultValue: Referentiel = new Referentiel(0, '', '');
  protected formulaire: FormGroup;
  private selectInput: AbstractControl;
  private idDossierSocial: number;
  private mode: string;
  public modeAjouter: boolean;

  protected CODE : string;

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.formulaire = fb.group({
      'selectInput' : [this.selectValue],
      'selectInput2' : [this.selectValue2]
    });
  };


  ngOnInit() {
    for (let i = 1; i <= 3; i++) {
      let referentiel: Referentiel = new Referentiel(i, `R${i}`, `Referentiel ${i}`);
      let referentiel2: Referentiel = new Referentiel(i+5, `R${i+5}`, `Referentiel ${i+5}`);
      this.dataList.push(referentiel);
      this.dataList2.push(referentiel2);
      this.selectDefaultOption();
    }
    this.formulaire.controls['selectInput2'].disable();
    this.route.params
    // (+) converts string 'id' to a number
    .subscribe((params: Params) => 
          this.idDossierSocial = +params['idDossierSocial']
    );
  }

  onSubmit() : void {
      // Since select is disabled, we need to force form value to have a value for the select
      this.formulaire.value.selectInput2 = this.dataList2.filter((option : Referentiel) => {
          return option.code === this.CODE;
      })[0];

      console.log(this.formulaire.value);
  }

  selectDefaultOption() : void {
    this.defaultValue = this.dataList2.filter((option : Referentiel) => {
         return option.code === this.CODE;
      })[0];
  }
}
