import { mimeType } from './mime-type.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth0Service } from 'src/app/auth/auth0.service';
import { KycService } from './../kyc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-kyc-approval',
  templateUrl: './create-kyc-approval.component.html',
  styleUrls: ['./create-kyc-approval.component.scss'],
})
export class CreateKycApprovalComponent implements OnInit {
  pageLoading = false;
  formLoading = false;
  disableControl = false;
  images: string[] = [];

  kycApprovalForm: FormGroup;

  constructor(
    private kycService: KycService,
    private authService: Auth0Service,
  ) {}

  ngOnInit(): void {
    this.pageLoading = true;
    this.formLoading = true;

    this.kycApprovalForm = new FormGroup({
      name: new FormControl(
        { value: '', disabled: this.disableControl },
        { validators: [Validators.required] },
      ),
      aadhaar_number: new FormControl(
        { value: '', disabled: this.disableControl },
        {
          validators: [
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(12),
          ],
        },
      ),
      contact_no: new FormControl(
        { value: '', disabled: this.disableControl },
        {
          validators: [Validators.minLength(10), Validators.maxLength(10)],
        },
      ),
      email: new FormControl(
        { value: '', disabled: this.disableControl },
        {
          validators: [Validators.email, Validators.required],
        },
      ),
      photo: new FormControl(
        { value: null, disabled: this.disableControl },
        {
          validators: [Validators.required],
          asyncValidators: [mimeType],
        },
      ),
    });

    this.formLoading = false;
    this.pageLoading = false;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);

          this.kycApprovalForm.patchValue({
            photo: this.images,
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  get KycApprovalFormControls() {
    return this.kycApprovalForm.controls;
  }

  async onCreate(): Promise<void> {
    if (this.kycApprovalForm.invalid) {
      return;
    }
    console.log(this.kycApprovalForm.value);

    const kycApprovalFormData = new FormData();
    kycApprovalFormData.append('name', this.kycApprovalForm.value.name);
    kycApprovalFormData.append(
      'aadhaar_number',
      this.kycApprovalForm.value.aadhaar_number,
    );
    kycApprovalFormData.append(
      'contact_no',
      this.kycApprovalForm.value.contact_no,
    );
    kycApprovalFormData.append('email', this.kycApprovalForm.value.email);
    kycApprovalFormData.append('photo', this.kycApprovalForm.value.photo);
  }
}
