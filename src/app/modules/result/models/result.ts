
export enum Category {
  REACTION = 'Reaction',
  MEMORY = 'Memory',
  VERBAL = 'Verbal',
  VISUAL = 'Visual'
}

export interface IResult {
  category: string;
  score: number;
  icon: string;
}

export class Result implements IResult {
  category: string;
  score: number;
  icon: string;

  constructor(input: IResult ){
    this.category = input.category;
    this.icon = input.icon;
    this.score = input.score;
  }

}
