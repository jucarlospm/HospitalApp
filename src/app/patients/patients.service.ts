import { Injectable } from '@angular/core';
import { Patient, Zone } from './patients.model';


@Injectable()
export class PatientsService {
  private patients: Patient[];
  private zones: Zone[];

  constructor() {
    this.zones = [
      {
        id: 0,
        name: 'Sin definir'
      },
      {
        id: 1,
        name: 'Urgencias'
      },
      {
        id: 2,
        name: 'UCI'
      },
      {
        id: 3,
        name: 'Cuidados Intensivos'
      },
      {
        id: 4,
        name: 'Cardiología'
      },
    ];
    this.patients = [];
  }

  getZones() {
    return this.zones;
  }

  getPatiens() {
    return this.patients;
  }

  addPatient(patient: Patient) {
    if(patient.zone === 0) {
      return;
    }
    this.patients.push(patient);
  }

  newPatient(): Patient {
    return {
      id: this.patients.length,
      name: '',
      identification_number: '',
      adress: '',
      reason_admission: '',
      zone: 0
    };
  }
}
