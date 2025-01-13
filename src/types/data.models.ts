import {  ReactNode } from "react";

export interface ICardDefinition {
  id: number;
  isActive: boolean;
  rec?: boolean;
  icon?: string;
  title: string | ReactNode;
  type?: boolean;
  desc?: ICardContent[] | string;
  price?: string;
  pro?: ReactNode;
  cardType: ReactNode | string;
  showContent?: boolean;
  content?: ReactNode | ICardContent[];
  background: string[];
}

export interface ICardContent {
  id: number;
  text: string;
  isActive: boolean;
}

export type StringObject = {
  [key: string]: string;
};

export type TSelectData = {
  id:number,
  label:string,
  checked:boolean
};
