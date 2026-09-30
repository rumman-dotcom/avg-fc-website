export interface Tournament {
  name: string;
  year: string;
  result: string;
  isOrganizedByClub: boolean;
}

export const tournaments: Tournament[] = [
  { name: "Leads Futsal Cup", year: "2024", result: "Group Stage", isOrganizedByClub: false },
  { name: "Festify Futsal Tournament", year: "2025", result: "Quarter Finals", isOrganizedByClub: false },
  { name: "Peak Arena Football Tournament", year: "2026", result: "Semi-Finals", isOrganizedByClub: false },
  { name: "AV Gardens FC Juniors Tournament - Season 1", year: "2023", result: "Successfully Organized", isOrganizedByClub: true },
  { name: "AV Gardens FC Juniors Tournament - Season 2", year: "2024", result: "Successfully Organized", isOrganizedByClub: true },
  { name: "AV Gardens FC Juniors Tournament - Season 3", year: "2024", result: "Successfully Organized", isOrganizedByClub: true },
  { name: "AV Gardens FC Juniors Tournament - Season 4", year: "2025", result: "Successfully Organized", isOrganizedByClub: true },
];
