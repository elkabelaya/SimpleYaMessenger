import { userStoreInstance } from "../stores/store_instances";
import LoginService from "./login_service";
import LogoutService from "./logout_service";
import RegisterService from "./register_service";
import UserService from "./user_service";

export const userService = new UserService(userStoreInstance);
export const registerService = new RegisterService(userStoreInstance);
export const loginService = new LoginService(userStoreInstance);
export const logoutService = new LogoutService(userStoreInstance);
