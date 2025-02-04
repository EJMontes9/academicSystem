import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Select } from 'primeng/select';


@Component({
  selector: 'app-secretary',
  imports: [
    NgFor, 
    ReactiveFormsModule,
    Select
  ],
  templateUrl: './secretary.component.html',
  styleUrl: './secretary.component.css'
})
export class SecretaryComponent implements OnInit {
  form!: FormGroup
  profesores!: any

  constructor (private fb:FormBuilder){}

  ngOnInit(): void {
    this.formInit();
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
      return
    }
  }
}
