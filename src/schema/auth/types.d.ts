interface IAuthResponse {
  message: string;
  accessToken: string;
  accessTokenExpiration: string; // Можно заменить на Date, если парсишь ISO-строку
  refreshToken: string;
}
