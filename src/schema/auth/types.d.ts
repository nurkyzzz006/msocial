interface IAuthResponse {
  message: string;
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}
interface IAuthRegRequest {
  email: string;
  password: string;
  username: string;
  photo: string;
}
interface UserProfile {
  id: string;
  username: string;
  role: string;
  email: string;
  isActive: boolean;
  photo: string;
  createdAt: string;
  updatedAt: string;
}
interface LoginAuthResponse {
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}
interface LoginAuthRequest {
  email: string;
  password: string;
}
