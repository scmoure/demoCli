import { Component, OnInit, Input } from '@angular/core';
import { IComparable } from '../models/i.comparable.model';
import { FormBuilder, FormControl, FormGroup, AbstractControl} from '@angular/forms';

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
    this.formControl.valueChanges.subscribe(
      (value : IComparable) => {    
//        this.selectedOption = this.optionsList.filter((option : IComparable) => {
//          return option.equals(value);
//        })[0];    
      }
    );
    this.selectedOption = this.optionsList.filter((item : IComparable) => {
      return item.equals(this.selectedOption);
    })[0];    
    this.formControl.setValue(this.selectedOption);
    
     
  }

  onChange(select:any) {
    console.log(select);
  }

}