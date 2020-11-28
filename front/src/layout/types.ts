export interface Schedule {
  id: number;
  producer: Producer;
  transporter: Transporter;
  start: string;
  end: string | null;
  unload_location: string;
  load_location: string;
}

export interface Producer {
  id: number;
  grain_type: string;
  user: any; // Fazer o do user depois
}

export interface Transporter {
  id: number;
}
