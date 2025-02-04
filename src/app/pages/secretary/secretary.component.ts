import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Select } from 'primeng/select';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ButtonModule} from "primeng/button";
import { FileUpload } from 'primeng/fileupload';
import {UploadFileComponent}from '../../shared/component/upload-file/upload-file.component'
import {InputNumber} from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-secretary',
  imports: [
    ReactiveFormsModule,
    Select,
    ToastModule,
    ButtonModule,
    FileUpload,
    UploadFileComponent,
    InputNumber,
    TextareaModule
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
    this.form = new FormGroup({
      value: new FormControl(),
      text: new FormControl<string | null>(null)
  });
  } 

  formInit() {
    this.form=this.fb.group({
      profesor: ["",[Validators.required]]
    })
  }

  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
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
