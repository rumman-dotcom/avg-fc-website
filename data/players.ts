export interface Player {
  name: string;
  number: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  image?: string; // Optional for now
}

export const players: Player[] = [
  { name: "Abdullah Omar", number: "1", position: "Goalkeeper" },
  { name: "Hamza", number: "3", position: "Defender" },
  { name: "Abeer-Ur-Rehman", number: "4", position: "Defender" },
  { name: "M. Rumman", number: "5", position: "Midfielder" },
  { name: "Huzaifa", number: "8", position: "Midfielder" },
  { name: "Muizz Asif", number: "17", position: "Midfielder" },
  { name: "Ali Mahfooz", number: "7", position: "Forward" },
  { name: "Abbas Bhatti", number: "9", position: "Forward" },
  { name: "Sohaib Roomi", number: "10", position: "Forward" },
  { name: "Rana Abdullah", number: "11", position: "Forward" },
];
