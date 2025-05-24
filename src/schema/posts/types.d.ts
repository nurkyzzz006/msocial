export type MediaType = "PHOTO" | "VIDEO"; // если есть другие типы — добавь
export interface IUser {
  id: number;
  username: string;
  role: "USER" | "ADMIN"; // Добавь другие роли, если есть
  email: string;
  isActive: boolean;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPost {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: MediaType;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
