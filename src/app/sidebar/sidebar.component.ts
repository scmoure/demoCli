import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'left-menu',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class LeftMenuComponent implements OnInit {
  public idDossierSocial : number;

  private test : string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .subscribe((params: Params) => 
      {
        setTimeout(() => {
          this.idDossierSocial = +params['idDossierSocial'];
        }, 2000);
      })
    setTimeout(() => {
      this.test = "myTest";
    }, 4000);
  }

}
