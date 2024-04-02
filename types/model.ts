export interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  accessToken:string;
}