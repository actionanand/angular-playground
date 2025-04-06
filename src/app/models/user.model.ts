export interface UserData {
  id: string;
  name: string;
  date: Date;
  rides: number;
  material: string;
  volume?: string;
  [key: string]: unknown; // Allows dynamic keys
}
