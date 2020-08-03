import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  productNameField: string = '';
  descriptionField: string = '';
  ingredientsField: string = '';
  nutritionalValueField: string = '';
  priceField: number = 0;
  availableField: boolean = true;
  uploadedFiles: any[] = [];

  constructor(
    private _messageService: MessageService,
    private _router: Router
  ) { }

  save(event): void {
    this._messageService.add({ severity: 'success', summary: 'Product saved', detail: '' });
  }

  cancel(event): void {
    this._messageService.add({ severity: 'info', summary: 'Register canceled', detail: '' });
    this._router.navigate(['product-list']);
  }

}
