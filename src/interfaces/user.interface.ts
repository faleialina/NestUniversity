export interface iUser {
  name: string;
  description: string;
}

export interface iUserWithId extends iUser {
  id: number;
}
