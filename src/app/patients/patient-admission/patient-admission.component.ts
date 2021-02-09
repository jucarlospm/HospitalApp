import { PatientsService } from './../patients.service';
import { Patient, Zone } from './../patients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-admission',
  templateUrl: './patient-admission.component.html',
  styleUrls: ['./patient-admission.component.css']
})
export class PatientAdmissionComponent implements OnInit {

  patient: Patient;
  zones: Zone[];
  dangerAlert;
  message = '';

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patient = this.patientsService.newPatient();
    this.zones = this.patientsService.getZones();
  }

  newPatient(): void {
    const response = this.patientsService.addPatient(this.patient);
    this.message = response.message;
    this.dangerAlert = !response.status;

    if(response.status === true) {
      this.patient = this.patientsService.newPatient();
    }
  }
}
