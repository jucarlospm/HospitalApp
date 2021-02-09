export interface Patient {
  id: string;
  name: string;
  identification_number: string;
  adress: string;
  reason_admission: string;
  zone: string;
}

export interface Zone {
  name: string;
}