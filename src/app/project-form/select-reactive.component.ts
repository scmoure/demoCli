import { Component, OnInit, Input } from '@angular/core';
import { IComparable } from '../models/i.comparable.model';
import { FormBuilder, FormControl, FormGroup, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'select-reactive',
  templateUrl: './select-reactive.component.html',
})
export class SelectReactive implements OnInit {
  @Input() optionsList : Array<IComparable>; 
  @Input() selectedOption : IComparable;
  @Input() property : any;
  @Input() formControl : FormControl;

  ngOnInit() {

    // Initialization of select value with the defaultOption input
    this.formControl.setValue(
      this.optionsList.filter((item : IComparable) => {
        return item.equals(this.selectedOption);
      })[0]
    );
  }

}