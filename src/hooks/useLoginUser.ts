import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

export const UserLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
