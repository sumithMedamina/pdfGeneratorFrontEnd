import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../insurance.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {
    this.form = this.fb.group({
      lifeAssuredTitle: [''],
      lifeAssuredFirstName: [''],
      lifeAssuredLastName: [''],
      lifeAssuredDOB: [''],
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

  ngOnInit(): void {
    // You can initialize the form with default values here
  }

  formatDateToDDMMYYYY(date: string): string {
    if (!date) return '';
    return formatDate(date, 'dd/MM/yyyy', 'en-US');
  }

  onSubmit(): void {
    console.log("Checking form submission:", this.form.value);

    if (this.form.valid) {
      const formValue = {
        ...this.form.value,
        lifeAssuredDOB: this.formatDateToDDMMYYYY(this.form.value.lifeAssuredDOB),
        proposerDOB: this.formatDateToDDMMYYYY(this.form.value.proposerDOB)
      };

      this.insuranceService.saveForm(formValue).subscribe(
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
