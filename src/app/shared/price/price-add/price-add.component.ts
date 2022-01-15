import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-price-add',
  templateUrl: './price-add.component.html',
  styleUrls: ['./price-add.component.scss'],
})
export class PriceAddComponent implements OnInit {
  priceForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<PriceAddComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: { name: string; id: string },
  ) {}

  ngOnInit(): void {
    this.priceForm = new FormGroup({
      price: new FormControl('', {
        validators: [Validators.required, Validators.min(1)],
      }),
      stock: new FormControl('', {
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(100),
        ],
      }),
    });
  }

  onSubmit(): void {
    if (this.priceForm.invalid) {
      return;
    }
    const priceFormData = {
      productId: this.dialogData.id,
      price: this.priceForm.value.price,
      stock: this.priceForm.value.stock,
    };

    this.dialogRef.close({
      valid: true,
      data: priceFormData,
    });
  }

  onClose(): void {
    this.dialogRef.close({ valid: false, data: null });
  }
}
