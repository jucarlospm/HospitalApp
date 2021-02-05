import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientsService } from './patients.service';
import { PatientAdmissionComponent } from './patient-admission/patient-admission.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';

@NgModule({
  declarations: [PatientAdmissionComponent, ListPatientsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PatientAdmissionComponent,
    ListPatientsComponent
  ],
  providers: [
    PatientsService
  ]
})
export class PatientsModule { }
