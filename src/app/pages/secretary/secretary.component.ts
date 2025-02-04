import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Select } from 'primeng/select';
import {Toast} from "primeng/toast";
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";


@Component({
  selector: 'app-secretary',
  imports: [
    ReactiveFormsModule,
    Select,
    Toast,
    Button
  ],
  templateUrl: './secretary.component.html',
  styleUrl: './secretary.component.css',
  providers: [MessageService]
})
export class SecretaryComponent implements OnInit {
  form!: FormGroup
  profesores!: any

  constructor (private fb:FormBuilder,private messageService: MessageService){}

  ngOnInit(): void {
    this.formInit();
    this.infoInit();
  } 

  formInit() {
    this.form=this.fb.group({
      profesor: ["",[Validators.required]]
    })
  }

  infoInit(){
    this.profesores = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

  onSubmit(){
    if(this.form.invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Formulario Invalido' });
      return
    }
    this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Creado correctamente' });
  }


}
