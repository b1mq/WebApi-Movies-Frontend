export interface Film {
  id: string; // В Firestore ID обычно строка, если генерируешь Guid, тоже строка
  title: string;
  description: string;
  year: number;
  author: string;
}