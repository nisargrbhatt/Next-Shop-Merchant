import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

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
  public imageForm: FormGroup;

  constructor(
    private kycService: KycService,
    private formBuilder: FormBuilder,
  ) {
    this.imageForm = this.formBuilder.group({
      photos: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.kycApprovalForm = this.formBuilder.group({
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
      photo: this.formBuilder.array([]),
    });
  }

  createItem(data: any): FormGroup {
    return this.formBuilder.group(data);
  }

  get photos(): FormArray {
    return this.imageForm.get('photos') as FormArray;
  }

  detectFiles(event: any): void {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.photos.push(
            this.createItem({
              file,
              url: e.target.result,
            }),
          );
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removePhoto(i: number): void {
    this.photos.removeAt(i);
  }

  async onCreate(): Promise<void> {
    if (this.kycApprovalForm.invalid && this.imageForm.value.photo.length > 0) {
      return;
    }

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
    for (const files of this.imageForm.value.photos) {
      const fileObj: File = files.file;
      kycApprovalFormData.append('image', fileObj);
    }

    this.kycService.createKycApproval(kycApprovalFormData);
  }
}
