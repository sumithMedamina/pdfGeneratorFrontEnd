import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {

  form: FormGroup = new FormGroup({});



  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      lifeAssuredTitle: [" "],
      lifeAssuredFirstName: [" "],
      lifeAssuredLastName: [" "],
      lifeAssuredDOB: [" "],
      planOption: [''],
      subOption: [''],
      incomeBenefitFrequency: [''],
      familyIncomeBenefit: [''],
      premiumPayingTerm: [''],
      policyTerm: [''],
      premiumPayingMode: [''],
      installmentPremium: [''],
      mobile: [''],
      email: [''],
      distributionChannel: [''],
      category: [''],
      proposerDifferent: [''],
      proposerTitle: [''],
      proposerFirstName: [''],
      proposerLastName: [''],
      proposerDOB: ['']
    });
  }



  onSubmit(): void {
    console.log("this is checking",this.form.value);

    if (this.form.valid) {
      this.insuranceService.saveForm(this.form.value).subscribe(
        response => {
          console.log('Form saved successfully!', response);
        },
        error => {
          console.error('Error saving form', error);
        }
      );
    }
  }



}
