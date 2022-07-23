export interface IFilterContent {
  value: string | number;
  content: string | number;
}

export interface ISummaryContent {
  name: string;
  aliases: string;
  title: string;
  books: number;
  tvSeries: number;
  id: string | number;
}

export interface Information {
  aliases: string[];
  allegiances: any[];
  books: string[];
  born: string;
  culture: string;
  died: string;
  father: string;
  gender: 'Female' | 'Male';
  mother: string;
  name: string;
  playedBy: string[];
  povBooks: any[];
  spouse: string;
  titles: string[];
  tvSeries: string[];
  url: string;
}
