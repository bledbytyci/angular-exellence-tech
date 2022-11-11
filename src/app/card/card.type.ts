export enum CardTypes {
  Plain = 'Plain',
  Primary = 'Primary'
}

export interface Card {
  type: CardTypes,
  title?: string;
  text?: string;
}

export interface CardContext {
  $implicit: Card;
}
