namespace SIGN {
  type regResponses = IAuthResponse;
  type regRequest = IAuthRegRequest;

  type GetMeResponses = {
    profile: UserProfile;
  };
  type GeMeRequest = void;

  type LoginResponses = LoginResponses;
  type LoginRequest = LoginRequest;
}
