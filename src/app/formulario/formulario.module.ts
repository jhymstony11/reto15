import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTareaComponent } from './form-tarea/form-tarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormTareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormTareaComponent
  ]
})
export class FormularioModule { }
