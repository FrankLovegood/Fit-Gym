export interface Musculo {
  nombre: string;
  intensidad: number; // de 0 a 100
}

export interface Ejercicio {
  id?: number;        // opcional, si se genera en la base de datos
  nombre: string;
  musculos: Musculo[];
}
