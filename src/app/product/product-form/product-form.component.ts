import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productNameField: string = '';
  descriptionField: string = '';
  ingredientsField: string = '';
  nutritionalValueField: string = '';
  priceField: number = 0;
  availableField: boolean = true;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File uploaded', detail: ''});
  }

  save(event): void {
    this.messageService.add({severity: 'success', summary: 'Product saved', detail: ''});
  }

  cancel(event): void {
    this.messageService.add({severity: 'info', summary: 'Register canceled', detail: ''});
  }

}
