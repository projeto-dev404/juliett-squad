export interface RootState {
  login: LoginState;
}

interface LoginState {
  isLoggedIn: boolean;
}