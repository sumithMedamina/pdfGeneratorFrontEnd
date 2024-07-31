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

  formatDateToDDMMYYYY(date: string): string {
    if (!date) return '';
    return formatDate(date, 'dd/MM/yyyy', 'en-US');
  }

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {}
  isclicketrue:boolean = false;

  ngOnInit() {
    this.form = this.fb.group({
      lifeAssuredTitle: [null],
      lifeAssuredFirstName: [''],
      lifeAssuredLastName: [''],
      lifeAssuredDOB: [''],
      planOption: ['Lump sum'],
      subOption: ['NA'],
      incomeBenefitFrequency: ['Monthly'],
      familyIncomeBenefit: ['No'],
      premiumPayingTerm: ['8'],
      policyTerm: ['26'],
      premiumPayingMode: ['Monthly'],
      installmentPremium: [''],
      mobile: [''],
      email: [''],
      distributionChannel: ['Individual Agent'],
      category: ['Others'],
      proposerDifferent: [false],
      proposerTitle: [null],
      proposerFirstName: [''],
      proposerLastName: [''],
      proposerDOB: ['']
    });
  }

  lifeAssuredTitle(event:any){
    this.form.patchValue({
      proposerTitle: this.form.get('lifeAssuredTitle')?.value,
      // proposerFirstName: this.form.get('lifeAssuredFirstName')?.value,
      // proposerLastName: this.form.get('lifeAssuredLastName')?.value,
      // proposerDOB: this.form.get('lifeAssuredDOB')?.value
    });
  }

  lifeAssuredLastName(event:any){
    this.form.patchValue({

      proposerLastName: this.form.get('lifeAssuredLastName')?.value,

    });
  }

  lifeAssuredFirstName(event:any){
    this.form.patchValue({

      proposerFirstName: this.form.get('lifeAssuredFirstName')?.value,

    });
  }

  lifeAssuredDOB(event:any){
    this.form.patchValue({
      proposerDOB: this.form.get('lifeAssuredDOB')?.value
    });
  }



  onProposerDifferentChange(event: any) {
    console.log(this.form)
    const isProposerDifferent = event.target.checked;
    if(this.isclicketrue==false){
      this.isclicketrue = true
    } else{
      this.isclicketrue = false;
    }
console.log(this.form);
if(this.form.get('proposerTitle')!= null && this.form.get('proposerTitle') != undefined){
  console.log(this.form.get('lifeAssuredTitle'), "the change in assured title")



  if (isProposerDifferent) {
    this.form.patchValue({
      proposerTitle: '',
      proposerFirstName: '',
      proposerLastName: '',
      proposerDOB: ''
    });



  }else{
    this.form.patchValue({
      proposerTitle: this.form.get('lifeAssuredTitle')?.value,
      proposerFirstName: this.form.get('lifeAssuredFirstName')?.value,
      proposerLastName: this.form.get('lifeAssuredLastName')?.value,
      proposerDOB: this.form.get('lifeAssuredDOB')?.value
    });
  }

}
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



