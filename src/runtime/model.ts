export type Suggestion = {
  name: string;
  allNames: string[];
  description?: string;
  icon: string;
  priority: number;
  insertValue?: string;
};

export type SuggestionBlob = {
  suggestions: Suggestion[];
  argumentDescription?: string;
  charactersToDrop?: number;
};
