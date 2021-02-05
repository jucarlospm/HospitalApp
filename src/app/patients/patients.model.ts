export interface Patient {
  id: number;
  name: string;
  identification_number: string;
  adress: string;
  reason_admission: string;
  zone: number;
}

export interface Zone {
  id: number;
  name: string;
}