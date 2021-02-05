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

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patient = this.patientsService.newPatient();
    this.zones = this.patientsService.getZones();
  }

  newPatient(): void {
    this.patientsService.addPatient(this.patient);
    this.patient = this.patientsService.newPatient();
  }
}
