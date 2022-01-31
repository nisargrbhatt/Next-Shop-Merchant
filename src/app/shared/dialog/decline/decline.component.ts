import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-decline',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.scss'],
})
export class DeclineComponent implements OnInit {
  declineForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DeclineComponent>) {}

  ngOnInit(): void {
    this.declineForm = new FormGroup({
      declineReason: new FormControl('', { validators: [Validators.required] }),
    });
  }

  async onSubmit(): Promise<void> {
    if (this.declineForm.invalid) {
      return;
    }

    const declineData = {
      action: true,
      reason: this.declineForm.value.declineReason,
    };

    this.dialogRef.close(declineData);
  }

  onCancel(): void {
    const cancelData = {
      action: false,
      reason: null,
    };
    this.dialogRef.close(cancelData);
  }
}
