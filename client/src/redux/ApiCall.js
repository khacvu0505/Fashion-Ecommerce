import { loginStart, loginFaillure, loginSuccess } from "./UserRedux";
import { publicRequest } from "../RequestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFaillure());
  }
};
