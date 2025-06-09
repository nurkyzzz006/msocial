namespace SIGN {
  type regResponses = IAuthResponse;
  type regRequest = IAuthRegRequest;

  type GetMeResponses = {
    profile: UserProfile;
  };
  type GeMeRequest = void;

  type LoginResponses = LoginResponses;
  type LoginRequest = LoginRequest;

  type ForgotPasswordResponse = {
    massege: string;
  };
  type ForgotPasswordRequest = {
    email: string;
    frontEndUrl: string;
  };

  type ResetPasswordResponse = {
    massege: string;
  };
  type ResetPasswordRequest = {
    token: string;
    newPassword: string;
  };
}
