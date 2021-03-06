import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ╔ÁNgNoValidate } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum/longueur-minimum.component';


@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({ 
      prenom: ['' , [VerifierCaracteresValidator.longueurMinimum(3), Validators.required]],
      
    });
  }
save(): void {
  }
}
