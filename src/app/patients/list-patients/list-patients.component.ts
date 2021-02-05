import { PatientsService } from './../patients.service';
import { Patient, Zone } from './../patients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: Patient[];
  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patients = this.patientsService.getPatiens();
  }

}
