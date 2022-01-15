import { UpdatePriceData } from './../../../price/price.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PriceService } from './../../../price/price.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceData } from 'src/app/price/price.interface';

@Component({
  selector: 'app-price-show-update',
  templateUrl: './price-show-update.component.html',
  styleUrls: ['./price-show-update.component.scss'],
})
export class PriceShowUpdateComponent implements OnInit {
  @Input() priceData: PriceData;

  priceForm: FormGroup;

  constructor(
    private priceService: PriceService,
    private dialogService: MatDialog,
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

    this.priceForm.patchValue({
      price: this.priceData.price,
      stock: this.priceData.stock,
    });

    this.disablePriceForm();
  }

  disablePriceForm(): void {
    this.priceForm.disable();
  }

  enablePriceForm(): void {
    this.priceForm.enable();
  }

  onSubmit(): void {
    if (this.priceForm.invalid) {
      return;
    }
    if (!this.priceForm.dirty) {
      return;
    }
    this.disablePriceForm();
    const updatePriceData: UpdatePriceData = {
      priceId: this.priceData.id,
      price: this.priceForm.value.price,
      stock: this.priceForm.value.stock,
    };
    this.priceService.updatePrice(updatePriceData);
  }
}
