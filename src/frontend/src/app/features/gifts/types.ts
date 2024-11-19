export type PeopleGiftListModelItem = {
  id: string;
  name: string;
  location: 'local' | 'remote';
  ideas: { id: string; description: string }[];
};
