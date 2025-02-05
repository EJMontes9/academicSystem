import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { BackendService } from '../../services/backend/backend.service';

@Component({
  selector: 'app-view-data-guess',
  imports: [
    TableModule,
    CommonModule,
  
  ],
  templateUrl: './view-data-guess.component.html',
  styleUrl: './view-data-guess.component.css'
})
export class ViewDataGuessComponent implements OnInit {
  products!: any[];

    constructor(private backendServices: BackendService) {}

    ngOnInit() {
        this.backendServices.getProductsMini().then((data) => {
            this.products = data;

        });
    }

}
