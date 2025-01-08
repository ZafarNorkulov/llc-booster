export interface ICardDefinition {
  id: number;
  isActive: boolean;
  rec?: boolean;
  title: string;
  type?: boolean;
  desc?: ICardContent[] | string;
  price?: string;
  pro?: boolean;
  cardType: string;
  showContent?: boolean;
  content?: ICardContent[];
  background: string[];
}

export interface ICardContent {
  id: number;
  text: string;
  isActive: boolean;
}
