import { Injectable } from '@angular/core';
import { Patient, Zone } from './patients.model';


@Injectable()
export class PatientsService {
  private patients: Patient[];
  private zones: Zone[];

  constructor() {
    this.zones = [
      {
        name: 'Sin definir'
      },
      {
        name: 'Urgencias'
      },
      {
        name: 'UCI'
      },
      {
        name: 'Cuidados Intensivos'
      },
      {
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
    if(patient.name === '') {
      return {status:false, message:'No ha ingresado el nombre del paciente'};
    }
    if(patient.identification_number === '') {
      return {status:false, message:'No ha ingresado la identificación del paciente'};
    }
    if(patient.reason_admission === '') {
      return {status:false, message:'No ha ingresado una razon de ingreso'};
    }
    if(patient.zone === '') {
      return {status:false, message:'No ha ingresado el grupo a asignar'};
    }
    this.patients.push(patient);
    return {status:true, message:'El paciente ha sido ingresado'};
  }

  removePatient(id) {
    this.patients = this.patients.filter((patient) => {
      return (
          id !== patient.id 
      );
    });
    return {status:true, message:'El paciente ha sido eliminado'};
  }

  makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  newPatient(): Patient {
    return {
      id: this.makeid(64),
      name: '',
      identification_number: '',
      adress: '',
      reason_admission: '',
      zone: ''
    };
  }
}
